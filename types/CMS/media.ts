export interface Media {
  id?: string
  createDate?: string
  updateDate?: string
  level?: number
  mediaTypeAlias?: string
  name?: string
  parent?: Media
  sortOrder?: number
  url?: string
  featured_url?: string
  narrow_banner_url?: string
  large_banner_url?: string
  small_square_url?: string
  portrait_url?: string
  blur_url?: string
  animated_banner_url?: string
  featured_listing_image?: string
  featured_secondary_listing_image?: string
  umbracoAlternateText: string
  umbracoFile?: {
    project_mobile_banner_image?: string
    featured_url?: string
    animated_banner_url?: string
    narrow_banner_url?: string
    large_banner_url?: string
    url?: string
    featured_listing_image?: string
    featured_secondary_listing_image?: string
    umbracoAlternateText: string
  }
}
