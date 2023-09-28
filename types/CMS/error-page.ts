export interface ErrorPage {
  __typename: string
  image: Image
  link: Link
  pageTitle: string
  text: string
}

interface Link {
  __typename: string
  name: string
  url: string
}

interface Image {
  __typename: string
  blur_url: string
  url: string
  featured_url: string
}
