import { CorePageProperties, Media, PageTypeNames } from '.'

export interface InsightsListingPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  image?: Media
  introText: any
  cTAComponent: any
  insightsListingData: any
  insights: any
  tagsLabel?: string
}
