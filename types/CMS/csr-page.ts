import { CorePageProperties } from '.'
import { Media } from './media'

export interface CSRPage extends CorePageProperties {
  __typename: string
  components: any
  videoSrc?: string
  hideFromSearchEngines: boolean
  image?: Media
  introText: string
  introductionText: string
  label: string
  name: string
  oGDescription: string
  oGImage?: any
  oGLocale: string
  oGLocaleAlternate: any[]
  oGTitle: string
  oGType: string
  oGUrl?: any
  pageTitle: string
  seoDescription: string
  seoTitle: string
  url: string
  formPagePicker?: {
    name: string
    url: string
  }
}
