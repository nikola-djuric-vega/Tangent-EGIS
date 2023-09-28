import { CorePageProperties, PageTypeNames } from '.'

export interface PressMediaPage extends CorePageProperties {
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
  text?: string

  peopleList?: any
  news: any
  inlineCTA?: any
  link: { url: string; name: string }
  latestNewsTitle?: string
}
