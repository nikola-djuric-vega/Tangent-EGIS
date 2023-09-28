import { CorePageProperties, PageTypeNames } from '.'

export interface NewsDetailPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  minutesRead: string
  publishedDate: string
  introText: string
  socialPlatforms: []
  components: any
  relatedContent: any
  cTAComponent: any
  ancestors: any
  richText?: string
  contactLink?: { url: string; name: string }
  peopleList?: any
  location?: any
}
