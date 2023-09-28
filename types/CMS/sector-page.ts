import { CorePageProperties, Media, PageTypeNames, SubSectorPage } from '.'

export interface SectorPage extends CorePageProperties {
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
