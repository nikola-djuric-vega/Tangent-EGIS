import { CorePageProperties, Media, PageTypeNames } from '.'

export interface WebinarListingPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  image?: Media
  components: any
  cTA?: any
  webinars: {
    __typename: string
    date: string
    duration: number
    image?: Image
    introductionText: string
    label: string
    name: string
    pageTitle: string
    url: string
    url_en: string
    url_fr: string
    webinarLabel: string
  }[]
}

interface Image {
  __typename: string
  blur_url: string
  umbracoFile: UmbracoFile
  url: string
}

interface UmbracoFile {
  __typename: string
  featured_url: string
  large_banner_url: string
  narrow_banner_url: string
}
