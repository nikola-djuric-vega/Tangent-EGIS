import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'

export const COOKIE_QUERY = (preview = false, locale = 'en') => gql`
  query {
    allHomePage(preview: ${preview}, culture: "${locale}") {
      items {
        cookieText
        denyButtonText
        agreeButtonText
      }
    }
  }
`

interface FetchCookie {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale?: string
}

async function fetchCookie({ apolloClient, preview, locale }: FetchCookie) {
  const { data } = await apolloClient.query<any>({
    query: COOKIE_QUERY(preview, locale),
  })

  return Object.values(data)
    .map((page: any) => page.items)
    .flat()[0]
}

export default fetchCookie
