import {
  CorePageProperties,
  CountryPage,
  Media,
  PageTypeNames,
  SocialNetwork,
} from '.'

export interface ContinentPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  introText: any
  image?: Media
  socialNetworks: SocialNetwork[]
  components?: any
  descendants?: { items: CountryPage[] }
  relatedContent1?: any
  relatedContent2?: any
  ancestors: { items: { name: string; url: string }[] }
  secondaryNavigationTitle?: string
}
