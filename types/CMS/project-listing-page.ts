import { CorePageProperties, Media, PageTypeNames } from '.'

export interface ProjectListingPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  image?: Media
  introText: any
  cTAComponent: any
  featuredProjects: { id: string[] }[]
  projects: any
  locale: string
  resetLabel?: string
  noResultsText?: string
  sectorsLabel?: string
  servicesLabel?: string
  locationsLabel?: string
  refreshButtonText?: string
}
