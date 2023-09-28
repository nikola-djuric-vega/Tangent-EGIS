import { CorePageProperties, PageTypeNames } from '.'

export interface StandardPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  components: any
  ancestors: Ancestors
}

interface Ancestors {
  items: {
    name: string
    url: string
  }[]
}
