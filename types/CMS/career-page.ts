import { CorePageProperties, Media, PageTypeNames } from '.'

export interface CareerPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  image?: Media
  date: string
  startTime: string
  introText: any
  endTime: string
  eventLabel: string
  registerLink?: { url: string; name: string }
  richText: string
  socialNetworks: []
  components: any
  parent?: { name: string; url: string }
  link?: { name: string; url: string }
}
