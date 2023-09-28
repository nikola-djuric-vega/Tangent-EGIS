import createApolloClient from '../lib/createApolloClient'
import fetchRoutes from '../utils/fetchRoutes'
import { transformUrl } from '../utils/helpers'

const Sitemap = () => {}

export const getServerSideProps = async ({ res, locale = 'en' }: any) => {
  const apolloClient = createApolloClient()
  const allCmsRoutes = await fetchRoutes({
    apolloClient,
    sitemap: true,
    locale,
  })
  const baseUrl = {
    development: 'https://localhost:3000',
    test: 'https://egis-test-frontdoor.tangentlabs.co.uk',
    production: 'https://egis-group.com',
  }[process.env.NODE_ENV]

  /* todo: add homepage to this */
  if (allCmsRoutes) {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${allCmsRoutes
      .map(
        ({
          url,
          url_fr,
          updateDate,
          hideFromXMLSitemap,
          searchEngineChangeFrequency,
          searchEngineRelativePriority,
        }) => {
          /* todo: change this so we check parent or siblings if it hasn't been defined */
          const changeFreq = searchEngineChangeFrequency
            ? searchEngineChangeFrequency
            : 'monthly'

          var priority = searchEngineRelativePriority
            ? searchEngineRelativePriority
            : '0.5'

          return (
            !hideFromXMLSitemap &&
            `
            <url>
              <loc>${baseUrl}${transformUrl(url)}</loc>
              <lastmod>${updateDate}</lastmod>
              <changefreq>${changeFreq}</changefreq>
              <priority>${priority}</priority>
              <xhtml:link rel='alternate' hreflang='en' href='${baseUrl}${transformUrl(
              url
            )}' />${
              url_fr
                ? `<xhtml:link rel='alternate' hreflang='fr' href='${baseUrl}/fr${transformUrl(
                    url_fr
                  )}' />`
                : ``
            }
            </url>
          `
          )
        }
      )
      .join('')}
      </urlset>
    `

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()
  }

  return {
    props: {},
  }
}

export default Sitemap
