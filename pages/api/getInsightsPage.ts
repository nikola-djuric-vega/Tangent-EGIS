import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import {
  blurUrl,
  featuredImage,
  featuredListingImage,
  featuredSecondaryListingImage,
  largeBannerImage,
  narrowBannerImage,
} from '../../utils/componentFragmentImages'

const insightPageDetails = `... on InsightPage {
  minutesRead
  introductionText
  label
  name
  url
  image {
... on Image {
  name
umbracoAlternateText
}
${largeBannerImage}
${narrowBannerImage}
${featuredImage}
${blurUrl}
${featuredListingImage}
${featuredSecondaryListingImage}
url
}
  insightTag {
    ... on InsightTag {
      name
    }
  }
}`

export const INSIGHTS_LISTING_QUERY = (preview = false, locale = 'en') => gql`
      query {
        allInsightPage(orderBy: updateDate_DESC, first: 6, culture: "${locale}") {
          items {
            ... on InsightPage {
              ${insightPageDetails}
            }
          }
        }
        allInsightsListing(culture: "${locale}") {
          items {
            featuredInsightsTitle
            mostPopularTitle
            latestInsightsTitle
            inlineCTAComponent {
              ... on InclineCTAComponent {
                link {
                  name
                  url
                }
                text
                title
              }
            }
            mostPopularInsights(culture: "${locale}") {
              ${insightPageDetails}
            }
            featuredInsights(culture: "${locale}") {
              ${insightPageDetails}
            }

          }
        },
      }
      `

interface fetchInsightsListingPage {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  locale?: string
}

async function fetchInsightsListingPage({
  apolloClient,
  preview,
  locale,
}: fetchInsightsListingPage) {
  const { data } = await apolloClient.query<any>({
    query: INSIGHTS_LISTING_QUERY(preview, locale),
  })

  return data
}

export default fetchInsightsListingPage
