import { CorePageProperties, PageTypeNames } from '.'

export interface PDFDownloadPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  label: string
  socialPlatforms: []
  url: string
  downloadItems: any
  components: any
}
