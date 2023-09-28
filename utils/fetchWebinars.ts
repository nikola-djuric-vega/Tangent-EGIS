import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { Navigation } from '../types/CMS'
import { pageBaseProperties } from './componentFragments'

export const WEBINAR_QUERY = (preview = false, locale = 'en') => gql`
  query {
        allWebinarPage(preview: ${preview}, orderBy: updateDate_DESC, culture: "${locale}") {
          items {
            name
            url
            startDate
            endDate
            durationFrom
            durationTo
            timeZone
            webinarLabel
            ${pageBaseProperties}
          }
        }
  }
`

interface FetchWebinars {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale?: string
}

async function fetchWebinars({ apolloClient, preview, locale }: FetchWebinars) {
  const { data } = await apolloClient.query<Navigation>({
    query: WEBINAR_QUERY(preview, locale),
  })

  return Object.values(data)
    .map((page) => page.items)
    .flat()
}

export default fetchWebinars
