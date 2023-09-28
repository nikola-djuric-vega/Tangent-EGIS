import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { Footer } from '../types/CMS'
import { checkLocale } from './helpers'

export const FOOTER_QUERY = (preview = false, locale = 'en') => gql`
  query {
    allFooterNavigation(preview: ${preview}, culture: "${locale}") {
      items {
        subscribeLink {
          name
          url
        }
        primaryNavigationLinks {
          name
          url
        }
        subscribeText
        secondaryFooterNavigation {
          name
          url
        }
        copyrightText
        socialFollowTitle
        socialFollow {
          ... on SocialFollowItem {
            socialPlatform
            uRL
          }
        }
      }
    }
  }
`

interface FetchFooter {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale?: string
  defaultLocale?: string
}

async function fetchFooter({
  apolloClient,
  preview,
  locale,
  defaultLocale,
}: FetchFooter) {
  const { data } = await apolloClient.query<Footer>({
    query: FOOTER_QUERY(preview, checkLocale(locale, defaultLocale)),
  })

  return Object.values(data)
    .map((page) => page.items)
    .flat()[0]
}

export default fetchFooter
