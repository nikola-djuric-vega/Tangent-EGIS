import { CorePageProperties, PageTypeNames } from '.'

export interface EventsListingPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  label: string
  socialPlatforms: []
  url: string
  downloadItems: any
  components: any
  cTAComponent: {
    __typename: string
    dDLBackgroundColor: string
    image: { url: string; blur_url: string; featured_url: string }
    introText: string
    link: { name: string; url: string }
    linkType: string
    title: string
  }[]
  upcomingEventsTitle: string
  webinarsTitle: string
  viewAll: {
    name: string
    url: string
  }
}
