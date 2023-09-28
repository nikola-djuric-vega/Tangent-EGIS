import { CorePageProperties, Media, PageTypeNames } from '.'

export interface EventDetailPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  image?: Media
  startDate?: string
  endDate?: string
  durationFrom?: string
  durationTo?: string
  timeZone?: string
  eventLabel: string
  registerLink?: { url: string; name: string }
  richText: string
  socialNetworks: []
  components: any
  parent?: { name: string; url: string }
}
