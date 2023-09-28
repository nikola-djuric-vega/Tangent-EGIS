import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { Navigation } from '../types/CMS'
import { blurUrl, featuredImage } from './componentFragmentImages'
interface fetchLatestNewsProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale: string
}

export const NEWS_QUERY = (preview = false, locale: string) => gql`
  query {
    allNewsDetailPage(preview: ${preview}, orderBy: publishedDate_DESC, first: 5, culture: "${locale}") {
      items {
        url
        name
        minutesRead
        publishedDate
        image {
          url
          ${featuredImage}
          ${blurUrl}
        }
      }
    }
  }
`

export default async function fetchLatestNews({
  apolloClient,
  preview,
  locale,
}: fetchLatestNewsProps) {
  const { data } = await apolloClient.query<Navigation>({
    query: NEWS_QUERY(preview, locale),
  })

  return Object.values(data)
    .map((page) => page.items)
    .flat()
}
