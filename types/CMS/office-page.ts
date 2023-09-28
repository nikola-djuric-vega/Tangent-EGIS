import { CorePageProperties, Form, PageTypeNames } from '.'

export interface OfficePage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  label: string
  socialPlatforms: []
  url: string
  components: any
  officeName: string
  link?: { url: string; name: string }
  address: string[]
  contactNumber: string
  ancestors: {
    items: { name: string; url: string }[]
  }
  formData: Form
  formComponent: {
    emailTo: string
    form?: Form
    formId: string
    formText: string
    formTitle: string
    thankYouPageLink?: {
      name: string
      url: string
    }
  }[]

  publicationComponent: any
  longitude: number
  latitude: number
}
