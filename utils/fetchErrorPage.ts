import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { Navigation } from '../types/CMS'
import { blurUrl, featuredImage } from './componentFragmentImages'
interface fetchErrorPageProps {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale?: string
}

export const ERROR_QUERY = (preview = false, locale = 'en') => gql`
  query {
    allErrorPage(preview: ${preview}, culture: "${locale}") {
    items {
      pageTitle
      image {
        url
        ${blurUrl}
        ${featuredImage}
      }
      text
      link {
        name
        url
      }
    }
  }
  }
`

export default async function fetchErrorPage({
  apolloClient,
  preview,
  locale,
}: fetchErrorPageProps) {
  const { data } = await apolloClient.query<Navigation>({
    query: ERROR_QUERY(preview, locale),
  })

  return Object.values(data)
    .map((page) => page.items)
    .flat()[0]
}
