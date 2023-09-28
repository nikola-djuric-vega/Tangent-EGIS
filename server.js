const { createServer } = require('http')
const next = require('next')
const { promises } = require('fs')

const { ServiceBusClient } = require('@azure/service-bus')
const { SearchClient, AzureKeyCredential } = require('@azure/search-documents')

const PORT = process.env.PORT || 3000

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

console.log(
  'Confirm frontdoor_slot is true: ',
  process.env.NEXT_IS_FRONTDOOR_SLOT
)
if (process.env.NEXT_IS_FRONTDOOR_SLOT === 'true') {
  const searchClient = new SearchClient(
    process.env.NEXT_PUBLIC_SEARCH_SERVICE_ENDPOINT,
    process.env.NEXT_PUBLIC_SEARCH_INDEX_NAME,
    new AzureKeyCredential(process.env.NEXT_PUBLIC_SEARCH_SUGGESTION_API_KEY)
  )

  const fullyQualifiedNamespace =
    process.env.AZURE_FULLY_QUALIFIED_NAMESPACE ||
    'Endpoint=sb://egis-test-servicebus.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=N5PShAZOMg1OWGf8jTIpiy5EjzHCwgfMjYglwwKyHTw='
  const serviceBusClient = new ServiceBusClient(fullyQualifiedNamespace)

  const purgePublishTopicName =
    process.env.AZURE_PUBLISH_PURGE_CDN_TOPIC ||
    'egis-test-servicebus-topic-purge-cdn-publish'
  const purgePublishSubscriptionName = 'purgecdnpublishsubscription'

  const purgePublishReceiver = serviceBusClient.createReceiver(
    purgePublishTopicName,
    purgePublishSubscriptionName
  )

  /* Purge Remove Message Handler is a special case because we don't have url
   So we need to query the search index for it with id providied */
  const purgeRemoveMessageHandler = async (message) => {
    console.log('Purge Remove Request Found for: ', message.body._id)

    if (message.body._id) {
      try {
        const result = await searchClient.getDocument(message.body._id)
        let enPurgeSuccess = false
        let frPurgeSuccess = false
        /* we need to call purgeData for each language */
        if (result.Path) {
          console.log(
            'Located English Path:',
            result.Path,
            'Now attempting to purge'
          )
          enPurgeSuccess = await purgeData(result.Path, true)
        }
        if (result.Path_fr) {
          console.log(
            'Located French Path:',
            result.Path_fr,
            'Now attempting to purge'
          )
          frPurgeSucess = await purgeData(result.Path_fr, true)
        }
        if (enPurgeSuccess || frPurgeSuccess) {
          console.log('Asking the Azure API to clear the CDN Cache')
          clearCdnCache(result.Path)
        }
      } catch {
        console.log(
          'Error when retrieving document via ID - likely already been deleted from index. ID:',
          message.body._id
        )
      }
    } else {
      console.log('Error: no _id provided for the page to be purged')
    }
  }
  const purgeMessageHandler = async (message) => {
    console.log('Purge Request Found for: ', message.body._url)

    if (message.body._url) {
      const purgeSuccess = await purgeData(message.body._url)
      if (purgeSuccess) {
        console.log('Asking the Azure API to clear the CDN Cache')
        await clearCdnCache(message.body._url)

        /* check if we need to do the same for the parent */
        const arrSeparatedUrl = message.body._url.split('/')
        if (
          [
            'all-news',
            'toute-l-actualite',
            'insights',
            'all-insights',
            'articles',
            'tous-les-articles',
            'events',
            'evenements',
            'projects',
            'projets',
          ].includes(arrSeparatedUrl[arrSeparatedUrl.length - 3])
        ) {
          /* Remove trailing / */
          arrSeparatedUrl.pop()
          /* Remove child page */
          arrSeparatedUrl.pop()

          /* put the url back together */
          const parentUrl = arrSeparatedUrl.join([(separator = '/')]) + '/'

          if (parentUrl !== '') {
            console.log('Purge Request Found parent page: ', parentUrl)
            const parentPurgeSuccess = await purgeData(parentUrl)
            if (parentPurgeSuccess) {
              console.log(
                'Asking the Azure API to clear the CDN Cache for Parent URL'
              )
              await clearCdnCache(parentUrl)
            }
          }
        }
      }
    } else {
      console.log('Error: no url provided for the page to be purged')
    }
  }
  const purgeErrorHandler = async (args) => {
    console.log(
      `Error occurred with ${args.entityPath} within ${args.fullyQualifiedNamespace}: `,
      args.error
    )
  }
  purgePublishReceiver.subscribe({
    processMessage: purgeMessageHandler,
    processError: purgeErrorHandler,
  })

  const purgeDeleteTopicName = process.env.AZURE_REMOVE_PURGE_CDN_TOPIC
  const purgeDeleteSubscriptionName = 'purgecdnremovesubscription'

  const purgeDeleteReceiver = serviceBusClient.createReceiver(
    purgeDeleteTopicName,
    purgeDeleteSubscriptionName
  )
  purgeDeleteReceiver.subscribe({
    processMessage: purgeRemoveMessageHandler,
    processError: purgeErrorHandler,
  })
}

const transformPath = (pathname) => {
  const urlRegex = /^\/*(home-page(?:-fr)?|page-d-accueil)\/*/

  if (pathname.match(urlRegex)) {
    pathname = pathname.replace(urlRegex, '/')
  }

  pathname = pathname.slice(0, -1)

  return pathname
}

const clearCdnCache = async (path) => {
  if (
    process.env.AZURE_SUBSCRIPTION_ID &&
    process.env.AZURE_FRONTDOOR_NAME &&
    process.env.AZURE_API_VERSION
  ) {
    var urlencoded = new URLSearchParams()
    urlencoded.append('client_id', process.env.AZURE_FRONTDOOR_CLIENT_ID)
    urlencoded.append('client_secret', process.env.AZURE_FRONTDOOR_SECRET)
    urlencoded.append('scope', 'https://management.azure.com/.default')
    urlencoded.append('grant_type', 'client_credentials')

    const language = path.indexOf('home-page') === -1 ? '/fr' : ''
    let urlPath = transformPath(path)
    urlPath = urlPath === '' ? '/' : urlPath
    fetch(
      `https://login.microsoftonline.com/${process.env.AZURE_FRONTDOOR_TENANT_ID}/oauth2/v2.0/token`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
          Host: 'login.microsoftonline.com',
        }),
        body: urlencoded,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(
          'Frontdoor cache will clear:',
          language + urlPath,
          '/_next/data/*',
          '/_next/static/*'
        )
        fetch(
          `https://management.azure.com/subscriptions/${process.env.AZURE_SUBSCRIPTION_ID}/resourceGroups/${process.env.AZURE_RESOURCE_GROUP_NAME}/providers/Microsoft.Network/frontDoors/${process.env.AZURE_FRONTDOOR_NAME}/purge?api-version=${process.env.AZURE_API_VERSION}`,
          {
            method: 'POST',
            headers: new Headers({
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + data.access_token,
            }),
            body: JSON.stringify({
              contentPaths: [
                language + urlPath,
                '/_next/data/*',
                '/_next/static/*',
              ],
            }),
          }
        )
          .then((response) => response)
          .then((data) => {
            if (data.status == 200 || data.status == 202) {
              console.log('Successfully cleared Frontdoor Cache')
            } else {
              console.log(
                'Error while attempting to clear Frontdoor Cache',
                data
              )
            }
          })
      })
  }
}

const purgeData = async (pathname, removeOnly = false) => {
  const language = pathname.indexOf('home-page') === -1 ? 'fr' : 'en'
  const correctedPathname = transformPath(pathname)
  const fullPathname = `.next/server/pages/${language}${correctedPathname}`
  const fullPathHTML = `${fullPathname}.html`
  const fullPathJSON = `${fullPathname}.json`
  try {
    const cachedData = await app.server.incrementalCache.get(
      '/' + language + correctedPathname
    )
    await promises.unlink(fullPathHTML)
    await promises.unlink(fullPathJSON)
    if (!removeOnly) {
      const staleTime = new Date().getTime() - 1000
      app.server.incrementalCache.set(
        '/' + language + correctedPathname,
        {
          ...cachedData.value,
          revalidateAfter: staleTime,
        },
        1
      )
    }
    console.log(`Cache of ${fullPathname} was successfully purged`)
    return true
  } catch (err) {
    console.error(`Could not purge cache of ${fullPathname} - ${err}`)
    return true
  }
}

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res)
  }).listen(PORT, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
