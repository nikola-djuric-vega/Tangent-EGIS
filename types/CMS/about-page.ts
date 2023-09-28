import { CorePageProperties, Media, PageTypeNames } from '.'

export interface AboutPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  image?: Media
  introText: any
  components?: any
  contactLink?: { name: string; url: string; target: string | null }
}
