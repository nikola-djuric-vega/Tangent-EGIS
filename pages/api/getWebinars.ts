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
        allWebinarPage(orderBy: startDate_ASC, culture: "${locale}") {
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
    `,
  })

  const items = Object.values(data)
    .map((page) => page.items)
    .flat()

  res.json(items)
}
