import { CorePageProperties, PageTypeNames } from '.'

export interface InsightPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  publishedDate: string
  minutesRead: string | number
  components: any
  insightTag: Tag[]
  relatedNewsInsights: any
  cTAComponent: any
  socialPlatforms: []
  parent: { name: string; url: string }
}

export interface Tag {
  name: string
}
