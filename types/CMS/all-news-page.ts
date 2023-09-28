import { CorePageProperties, Media, NewsDetailPage, PageTypeNames } from '.'

export interface AllNewsPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  image?: Media
  introText: any
  cTAComponent: any
  locationsLabel?: string
  newestTitle?: string
  oldestTitle?: string
  resetLabel?: string
}
