import createApolloClient from '../../lib/createApolloClient'
import { CmsRoute } from '../../types/CMS'
import { gql } from '@apollo/client'
import { pageBaseProperties, filters } from '../../utils/componentFragments'
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
        allProjectPage(culture: "${locale}") {
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
  `,
  })

  const items = Object.values(data)
    .map((page) => page.items)
    .flat()

  res.json(items)
}
