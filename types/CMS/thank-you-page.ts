import { CorePageProperties, Media, PageTypeNames } from '.'

export interface ThankYouPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  pageTitle: string
  image?: Media
  introText?: string
  formPagePicker?: any
  secondaryNavigationTitle?: string
  text?: string
  components?: any
  descendants?: any
  relatedContent?: any
}
