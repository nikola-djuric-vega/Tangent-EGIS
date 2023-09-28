import createApolloClient from '../../lib/createApolloClient'
import { CmsRoute } from '../../types/CMS'
import { gql } from '@apollo/client'
import { pageBaseProperties } from '../../utils/componentFragments'

export default async function (req: any, res: { json: any }) {
  const apolloClient = createApolloClient()
  const locale = req.query.locale
  const { data } = await apolloClient.query<CmsRoute>({
    query: gql`
      query {
        allInsightPage(orderBy: publishedDate_DESC, culture: "${locale}") {
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
    }`,
  })

  const items = Object.values(data)
    .map((page) => page.items)
    .flat()

  res.json(items)
}
