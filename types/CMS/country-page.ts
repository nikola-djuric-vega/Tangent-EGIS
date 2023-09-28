import { CorePageProperties, Media, SocialNetwork, PageTypeNames } from '.'

export interface CountryPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  introText: any
  image?: Media
  socialNetworks: SocialNetwork[]
  components: any
  parent?: any
  relatedProjects?: any
  relatedNewsInsights?: any
  ancestors: { items: { name: string; url: string }[] }
  socialFollowTitle: string
}
