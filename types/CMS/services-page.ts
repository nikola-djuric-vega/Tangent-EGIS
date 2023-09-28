import { CorePageProperties, Media, PageTypeNames } from '.'

export interface ServicesPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  pageTitle: string
  image?: Media
  introText?: string
  formPagePicker?: any
  secondaryNavigationTitle?: string
  richText?: string
  components?: any
  descendants?: any
  ancestors: { items: { name: string; url: string }[] }
}
