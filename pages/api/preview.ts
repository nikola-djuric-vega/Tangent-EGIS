// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import createApolloClient from '../../lib/createApolloClient'
import fetchRoutes from '../../utils/fetchRoutes'
import { destroyCookie } from 'nookies'
import { transformUrl } from '../../utils/helpers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow preview mode from trusted sources
  if (req.query.code !== process.env.PREVIEW_SECRET || !req.query.path) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Extra security measure, check the route exists in the CMS
  const apolloClient = createApolloClient()
  const allCmsRoutes = await fetchRoutes({
    apolloClient,
    preview: true,
    locale: 'en',
  })

  const cmsRoute = allCmsRoutes.find(
    (route) =>
      route.url_fr?.replace(/\/$/, '') === req.query.path ||
      route.url_es?.replace(/\/$/, '') === req.query.path ||
      route.url_pt?.replace(/\/$/, '') === req.query.path ||
      route.url?.replace(/\/$/, '') === req.query.path
  )

  if (cmsRoute) {
    res.setPreviewData({}, { maxAge: 5 * 60 })

    // Redirect using the CMS url data to prevent redirect vulnerability from user input
    if (cmsRoute.url_fr?.replace(/\/$/, '') === req.query.path) {
      res.writeHead(307, { location: '/fr' + transformUrl(cmsRoute.url_fr) })
    } else if (cmsRoute.url_es?.replace(/\/$/, '') === req.query.path) {
      res.writeHead(307, { location: '/es' + transformUrl(cmsRoute.url_es) })
    } else if (cmsRoute.url_pt?.replace(/\/$/, '') === req.query.path) {
      res.writeHead(307, { location: '/pt' + transformUrl(cmsRoute.url_pt) })
    } else {
      res.writeHead(307, { location: transformUrl(cmsRoute.url) })
    }
    res.end()
  } else {
    return res.status(404).json({ message: 'No route found' })
  }
}
