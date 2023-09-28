import createApolloClient from '../../lib/createApolloClient'
import { CmsRoute } from '../../types/CMS'
import { gql } from '@apollo/client'
import { pageBaseProperties } from '../../utils/componentFragments'

export default async function (req: any, res: { json: any }) {
  const apolloClient = createApolloClient()
  const locale = req.query.locale
  const order =
    req.query?.order?.toUpperCase() === 'ASC' ||
    req.query?.order?.toUpperCase() === 'DESC'
      ? req.query?.order?.toUpperCase()
      : 'DESC'
  const { data } = await apolloClient.query<CmsRoute>({
    query: gql`
      query {
        allNewsDetailPage(orderBy: publishedDate_${order}, culture: "${locale}") {
          items {
            name
            url
            publishedDate
            ${pageBaseProperties}
            minutesRead
            location {
              ... on CountryPage {
                url
                ${pageBaseProperties}
              }
              ... on ContinentPage {
                url
                ${pageBaseProperties}
              }
            }
          }
        }
      }`,
  })

  const items = Object.values(data)
    .map((page) => page.items)
    .flat()

  res.json(items)
}
