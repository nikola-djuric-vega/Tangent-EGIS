import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { Navigation } from '../types/CMS'
import { checkLocale } from './helpers'

export const NAVIGATION_QUERY = (preview = false, locale = 'en') => gql`
  query {
    allMainNavigation(preview: ${preview}, culture: "${locale}") {
      items {
        mainNav {
          ... on MainNavComponent {
            primaryLinks {
              ... on UtilityPageComponent1 {
                navItemName {
                  name
                  url
                  target
                }
                title
                text
                groups {
                  ... on NavigationGroup {
                    title
                    pages {
                      name
                      url
                    }
                    extraSpacing
                  }
                }
              }
            }
            secondaryLinks {
              ... on UtilityPageComponent1 {
                navItemName {
                  name
                  url
                  target
                }
                title
                text
                groups {
                  ... on NavigationGroup {
                    title
                    pages {
                      name
                      url
                    }
                    extraSpacing
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

interface FetchNavigationProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale?: string
  defaultLocale?: string
}

async function fetchNavigation({
  apolloClient,
  preview,
  locale,
  defaultLocale,
}: FetchNavigationProps) {
  const { data } = await apolloClient.query<Navigation>({
    query: NAVIGATION_QUERY(preview, checkLocale(locale, defaultLocale)),
  })

  return Object.values(data)
    .map((page) => page.items)
    .flat()
}

export default fetchNavigation
