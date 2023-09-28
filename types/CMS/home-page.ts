import { CorePageProperties, PageTypeNames } from '.'

export interface HomePage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  heroBannerItems?: any[]

  cTA?: any
  relatedNewsInsights?: any
  contentCarousel?: any
  threeColumnText?: any
  threeColumnTextTitle?: string
  carousel?: any
  carouselComponentTitle?: string
  videoBackground?: VideoBanner[]
  introText?: any
}

interface VideoBanner {
  __typename: string
  category: string
  introText: string
  link: Link
  preloadImage: PreloadImage
  title: string
  video: PreloadImage
}

interface PreloadImage {
  __typename: string
  url: string
  umbracoAlternateText: string
}

interface Link {
  __typename: string
  name: string
  url: string
}
