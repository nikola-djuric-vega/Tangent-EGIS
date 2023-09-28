import { gql } from '@apollo/client'
import { PageTypeNames } from '../types/CMS'
import { getPageFragment } from './fragments'
import { checkLocale } from './helpers'

interface GetContentQueryParams {
  searchProperty: string
  searchValue: string
  locale?: string
  type: PageTypeNames
  preview?: boolean
  defaultLocale?: string
}

function getContentQuery({
  searchProperty,
  searchValue,
  type,
  locale = 'en',
  preview = false,
  defaultLocale,
}: GetContentQueryParams) {
  return gql`
    ${getPageFragment(type, checkLocale(locale, defaultLocale))}

    query {
      content(${searchProperty}: "${searchValue}", culture: "${locale}", preview: ${preview}) {
        name
        url

        ...${type}
      }
    }
  `
}

export default getContentQuery
