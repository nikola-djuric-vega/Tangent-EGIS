import { CorePageProperties, Form, Media, PageTypeNames } from '.'

export interface ContactUsSectorServicePage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  image?: Media
  components: any
  formComponent: any
  parent: {
    url: string
    name: string
  }
  formData: Form
}
