import { CorePageProperties, PageTypeNames } from '.'

export interface PeoplePage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  label: string
  socialPlatforms: []
  url: string
  downloadItems: any
  components: any
  introText: string
  socialShare: any
  parent: { url: string; name: string }
  joinedInText?: string
  roleText?: string
  locationText?: string
  fullName?: string
}
