import { CorePageProperties, PageTypeNames } from '.'

export interface SearchResultsPage extends CorePageProperties {
  __typename: PageTypeNames
  name: string
  url: string
  allLabel: string
}
