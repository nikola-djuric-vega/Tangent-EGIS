import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { Navigation } from '../types/CMS'

interface FetchContinentsProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale: string
}

export const CONTINENT_QUERY = (preview = false, locale: string) => gql`
  query {
    allContinentPage(preview: ${preview}, culture: "${locale}") {
    items {
      name
      children {
        items {
          name
          url
        }
      }
    }
  }
  }
`

export default async function fetchContinents({
  apolloClient,
  preview,
  locale,
}: FetchContinentsProps) {
  const { data } = await apolloClient.query<Navigation>({
    query: CONTINENT_QUERY(preview, locale),
  })

  return Object.values(data)
    .map((page) => page.items)
    .flat()
}
