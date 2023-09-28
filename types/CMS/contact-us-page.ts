import { CorePageProperties, Media, OfficeAccordion, PageTypeNames } from '.'

export interface ContactUsPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  image?: Media
  introText: any
  office: OfficeAccordion[]
  headline: string
  address: string[]
  getInTouchLink: {
    __typename: string
    name: string
    url: string
  }
  contactNumber: string
}
