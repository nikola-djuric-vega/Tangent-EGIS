export const blurUrl = `
  blur_url: url (
    width: 10
    height: 10
    cropMode: CROP
    upscale: true
  )
`

export const animatedBannerImage = `
  ... on Image {
    name
    umbracoFile {
      animated_banner_url: cropUrl(
        width: 1440
        height: 810
        cropMode: CROP
        upscale: true
        preferFocalPoint: true
      )
    }
  }
`

export const featuredListingImage = `
... on Image {
  name
  umbracoFile {
    featured_listing_image: cropUrl(
      width: 728
      height: 384
      cropMode: CROP
      upscale: true
      preferFocalPoint: true
    )
  }
}
`

export const featuredSecondaryListingImage = `
... on Image {
  name
  umbracoFile {
    featured_secondary_listing_image: cropUrl(
      width: 472
      height: 384
      cropMode: CROP
      upscale: true
      preferFocalPoint: true
    )
  }
}
`

export const largeBannerImage = `
  ... on Image {
    name
    umbracoAlternateText
    umbracoFile {
      large_banner_url: cropUrl(
        width: 1047
        height: 740
        cropMode: CROP
        upscale: true
        preferFocalPoint: true
      )
    }
  }
`

export const projectMobileBannerImage = `
  ... on Image {
    name
    umbracoFile {
      project_mobile_banner_image: cropUrl(
        width: 370
        height: 170
        cropMode: CROP
        upscale: true
        preferFocalPoint: true
      )
    }
  }
`

export const narrowBannerImage = `
  ... on Image {
    name
    umbracoAlternateText
    umbracoFile {
      narrow_banner_url: cropUrl(
        width: 700
        height: 508
        cropMode: CROP
        upscale: true
        preferFocalPoint: true
      )
    }
  }
`

export const featuredImage = `
  ... on Image {
    name
    umbracoAlternateText
      umbracoFile {
        featured_url: cropUrl(
          width: 344
          height: 255
          cropMode: CROP
          upscale: true
          preferFocalPoint: true
        )
      }
    }
`

export const smallSquareImage = `
  ... on Image {
    name
    umbracoFile {
      url: cropUrl(
        width: 300
        height: 300
        cropMode: CROP
        upscale: true
        preferFocalPoint: true
      )
    }
  }
`

export const largeSquareImage = `
  ... on Image {
    name
    umbracoAlternateText
    umbracoFile {
      url: cropUrl(
        width: 780
        height: 780
        cropMode: CROP
        upscale: true
        preferFocalPoint: true
      )
    }
  }
`

export const ctaImage = `
... on Image {
  name
  umbracoFile {
    url: cropUrl(
      width: 606
      height: 353
      cropMode: CROP
      upscale: true
      preferFocalPoint: true
    )
  }
}
`

export const imageCarouselLandscape = `
  ... on Image {
    name
    umbracoFile {
      url: cropUrl(
        width: 767
        height: 558
        cropMode: CROP
        upscale: true
        preferFocalPoint: true
      )
    }
  }
`

export const imageCarouselPortrait = `
  ... on Image {
    name
    umbracoFile {
      portrait_url: cropUrl(
        width: 700
        height: 954
        cropMode: CROP
        upscale: true
        preferFocalPoint: true
      )
    }
  }
`

export const wideImage = `
  ... on Image {
    name
    umbracoFile {
      url: cropUrl(
        width: 1280
        height: 650
        cropMode: CROP
        upscale: true
        preferFocalPoint: true
      )
    }
  }
`
