import { Media, Link } from '.'

export interface PageMetadata {
  contentTypeAlias: string
  seoTitle?: string
  seoDescription?: string
  hideFromSearchEngines?: boolean
  oGTitle?: string
  oGType?: string
  oGImage?: Media
  oGDescription?: string
  oGUrl?: Link
  oGLocale?: string
  oGLocaleAlternate?: string[]
}
