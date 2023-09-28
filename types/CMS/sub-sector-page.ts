import { CorePageProperties, Media, PageTypeNames } from '.'

export interface SubSectorPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  pageTitle: string
  url: string
  image?: Media
  introText?: string
  formPagePicker?: any
  richText?: any
  components?: any
  parent: { name: string; url: string }
  ancestors: { items: { name: string; url: string }[] }
}
