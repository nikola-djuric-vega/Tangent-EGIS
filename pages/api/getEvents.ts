import createApolloClient from '../../lib/createApolloClient'
import { CmsRoute } from '../../types/CMS'
import { gql } from '@apollo/client'
import { pageBaseProperties } from '../../utils/componentFragments'
import {
  blurUrl,
  featuredImage,
  featuredListingImage,
  featuredSecondaryListingImage,
  largeBannerImage,
  narrowBannerImage,
} from '../../utils/componentFragmentImages'

export default async function (req: any, res: { json: any }) {
  const apolloClient = createApolloClient()
  const locale = req.query.locale
  const { data } = await apolloClient.query<CmsRoute>({
    query: gql`
      query {
        allEventDetailPage(orderBy: startDate_ASC, culture: "${locale}") {
          items {
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
            name
            url
            startDate
            endDate
            durationFrom
            durationTo
            timeZone
            eventLabel
          }
        }
      }
    `,
  })

  const items = Object.values(data)
    .map((page) => page.items)
    .flat()

  res.json(items)
}
