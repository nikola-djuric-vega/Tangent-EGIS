// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import gql from 'graphql-tag'
import type { NextApiRequest, NextApiResponse } from 'next'
import createApolloClient from '../../lib/createApolloClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const apolloClient = createApolloClient()

  const POPULAR_SEARCH_QUERY = (preview = false) => gql`
    query {
      allSearchResults(preview: ${preview}) {
          items {
            popularSearches
          }
        }
    }
  `

  const { data } = await apolloClient.query<any[]>({
    query: POPULAR_SEARCH_QUERY(false),
  })

  const popularSearches = Object.values(data)
    .map((page) => page.items)
    .flat()[0].popularSearches

  if (popularSearches) {
    res.json(popularSearches)
  } else {
    res.status(204).json({ message: 'No data' })
  }
}
