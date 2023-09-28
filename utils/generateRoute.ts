import { CmsRouteItem } from '../types/CMS'
import { transformUrl } from './helpers'

interface GenerateRouteProps {
  route: CmsRouteItem
  locale?: string
}

function generateRoute({ route, locale }: GenerateRouteProps) {
  const isRoot = route.url === '/'
  let url = ''
  let key: keyof CmsRouteItem = (
    locale ? 'url_' + locale : 'url'
  ) as keyof CmsRouteItem

  if (isRoot) {
    return { params: { slug: false }, ...(locale && { locale }) }
  }

  if (locale === 'en') {
    url = transformUrl(route.url)
  } else {
    url = transformUrl(route[key] as string)
  }

  // The following would convert '/foo/bar' to ['foo', 'bar']
  const slug = url.split('/').filter((item) => !!item)

  return {
    params: {
      slug,
    },
    ...(locale && { locale }),
  }
}

export default generateRoute
