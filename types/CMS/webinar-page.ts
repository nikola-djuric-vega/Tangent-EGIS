import { CorePageProperties, Media, PageTypeNames } from '.'

export interface WebinarPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  image?: Media
  startDate?: string
  endDate?: string
  durationFrom?: string
  durationTo?: string
  timeZone?: string

  webinarLabel: string
  socialPlatforms: []
  components: any
  parent?: { name: string; url: string }
}
