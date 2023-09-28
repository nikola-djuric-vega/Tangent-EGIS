import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { Footer } from '../types/CMS'

import { pageBaseProperties } from './componentFragments'

export const INSIGHTS_QUERY = (preview = false, locale = 'en') => gql`
  query {
    allInsightPage(orderBy: publishedDate_DESC, culture: "${locale}", preview: ${preview}) {
    items {
    name
    url
    ${pageBaseProperties}
    minutesRead
    insightTag {
      name
    }
  }
}
  }
`

interface FetchInsights {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale?: string
}

async function fetchInsights({ apolloClient, preview, locale }: FetchInsights) {
  const { data } = await apolloClient.query<Footer>({
    query: INSIGHTS_QUERY(preview, locale),
  })

  return Object.values(data)
    .map((page) => page.items)
    .flat()
}

export default fetchInsights
