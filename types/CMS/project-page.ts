import { CorePageProperties, PageTypeNames } from '.'

export interface ProjectPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  label: string
  socialPlatforms: []
  url: string
  components: any
  contactLink: { name: string; url: string }
  featured?: boolean
  parent: {
    name: string
    url: string
  }
}
