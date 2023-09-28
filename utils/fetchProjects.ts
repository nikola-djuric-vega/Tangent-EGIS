import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { Footer } from '../types/CMS'
import {
  blurUrl,
  featuredImage,
  featuredListingImage,
  featuredSecondaryListingImage,
  largeBannerImage,
  narrowBannerImage,
} from './componentFragmentImages'
import { filters } from './componentFragments'

export const PROJECT_QUERY = (preview = false, locale = 'en') => gql`
  query {
    allProjectPage(preview: ${preview}, culture: "${locale}", orderBy: updateDate_DESC) {
          items {
            id
            name
            url
            pageTitle
            label
            introductionText
            image {
              ${largeBannerImage}
              ${narrowBannerImage}
              ${featuredImage}
              ${blurUrl}
              ${featuredListingImage}
              ${featuredSecondaryListingImage}
            }
            ${filters}
          }
        }
  }
`

interface FetchProject {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale?: string
}

async function fetchProject({ apolloClient, preview, locale }: FetchProject) {
  const { data } = await apolloClient.query<Footer>({
    query: PROJECT_QUERY(preview, locale),
  })

  return Object.values(data)
    .map((page) => page.items)
    .flat()
}

export default fetchProject
