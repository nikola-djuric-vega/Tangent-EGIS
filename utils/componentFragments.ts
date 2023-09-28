import {
  blurUrl,
  ctaImage,
  featuredImage,
  imageCarouselLandscape,
  imageCarouselPortrait,
  largeBannerImage,
  largeSquareImage,
  narrowBannerImage,
  smallSquareImage,
  wideImage,
  featuredListingImage,
  featuredSecondaryListingImage,
  projectMobileBannerImage,
} from './componentFragmentImages'

const image = `image {
  ... on Image {
    name
    umbracoAlternateText
  }
      ${largeBannerImage}
      ${narrowBannerImage}
      ${featuredImage}
      ${blurUrl}
      url
    }`

export const pageBaseProperties = `
  url_en: url(culture: "en")
  url_fr: url(culture: "fr")
  url_pt: url(culture: "pt")
  url_es: url(culture: "es")
  url_de: url(culture: "de")
  pageTitle
  label
  introductionText
  image {
    ${projectMobileBannerImage}
    ${largeBannerImage}
    ${narrowBannerImage}
    ${featuredImage}
    ${blurUrl}

    url
  }
`
export const pageBasePropertiesWithLocale = (locale = 'en') => {
  return `
  url_en: url(culture: "en")
  url_fr: url(culture: "fr")
  url_pt: url(culture: "pt")
  url_es: url(culture: "es")
  url_de: url(culture: "de")
  pageTitle(culture: "${locale}")
  label
  introductionText
  image {
    ${projectMobileBannerImage}
    ${largeBannerImage}
    ${narrowBannerImage}
    ${featuredImage}
    ${blurUrl}

    url
  }
`
}

export const pages = `
  ... on InsightPage {
    ${pageBaseProperties}
    publishedDate
    minutesRead
  }
  ... on ProjectPage {
    ${pageBaseProperties}
  }
  ... on NewsDetailPage {
    ${pageBaseProperties}
    publishedDate
    minutesRead
  }
  ... on AboutPage {
    url
    ${pageBaseProperties}
  }
    ... on PeoplePage {
    url
    ${pageBaseProperties}
      ${image}
  }
 
  ... on CareersPage {
    pageTitle
    url
      ${image}
  }


  ... on WebinarPage {
    pageTitle
    url
      ${image}
  }


  ... on SubServicePage {
    pageTitle
    url 
    ${image}
  }

  ... on ServicesPage {
    pageTitle
    url
    ${image}
  }

    ... on InsightsListing {
    pageTitle
    url
     ${image}
  }

   ... on AllNews {
    pageTitle
    url
    ${image}
  }

  ... on CSRPage {
    pageTitle
    url
    ${image}
  }
   ... on EventDetailPage {
    pageTitle
    url
    ${image}
    startDate
    endDate
  }
   
    ... on SectorPage {
    pageTitle
    url
    ${image}
  }
    ... on SubSectorPage {
    pageTitle
    url
    ${image}
  }



`

export const downloadItem = `
  ... on DownloadItem {
    title
    introTe
    image {
      ${featuredImage}
      ${blurUrl}
    }
    date
    file {
      url
      name
      ... on File {
        umbracoBytes
      }
    }
    link {
      url
      name
    }
    linkType
    
  }
`

export const airport = `
  ... on Airport {
    title
    country
    readMoreText
    image {
      ... on Image {
        name
        umbracoAlternateText
      }
      ${smallSquareImage}
      ${blurUrl}
    }
    downloadable
    link {
      name
      url
    }
    readMoreLinkText
  }
`

export const airportsGridComponent = `
  ... on AirportsGridComponent {
    title
    airports {
      ${airport}
    }
  }
`

export const awardListComponent = `
  ... on AwardListComponent {
    title
    awardItems {
      ... on AwardListItem {
        year
        awardListItems {
          name
          url
          ${pages}
        }
      }
    }
  }
`

export const contentCarouselComponent = `
  ... on ContentCarouselCompo {
    title
    contentCarouselItems {
      name
      url
      ${pages}
    }
    viewAllLink {
      url
      name
    }
  }
`

export const ctaComponent = `
  ... on CTAComponent {
    title
    introText
    image {
      ... on Image {
        name
        umbracoAlternateText
      }
      ${ctaImage}
      ${blurUrl}
    }
    link {
      name
      url
    }
    linkType
    dDLBackgroundColor
  }
`

export const fourColumnTextComponent = `
  ... on FourColumnTextComponent {
    columnItems {
      ... on ColumnTextItem {
        title
        introText
      }
    }
  }
`

export const genericLandingComponent = `
  ... on GenericLandingComponent {
    title
    item {
      ${downloadItem}
    }
  }
`

export const imageCarouselComponent = `
  ... on ImageCarouselComponent {
    title
    imageCarouselItems {
      ... on ImageCarouselItem {
        isPortrait
        caption
        image {
          ... on Image {
            umbracoAlternateText
            name
          }
          ${imageCarouselPortrait}
          ${imageCarouselLandscape}
          ${blurUrl}
        }
      }
    }
  }
`

export const inlineCtaComponent = `
  ... on InclineCTAComponent {
    title
    text
    link {
      url
      name
    }
  }
`

export const officesAccordionComponent = `
  ... on OfficesAccordionComponent {
    title
    continents {
      ... on ContinentItem {
        title
        countries {
          ... on CountryItem {
            title
            regions {
              ... on RegionItem {
                title
                regionOffices {
                  ... on OfficePage {
                    officeName
                    address
                    url
                    contactNumber
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const quoteCarouselItem = `
  ... on QuoteCarouselItem {
    author
    role
    text
  }
`

export const quoteCarouselComponent = `
  ... on QuoteCarouselComponent {
    quotes {
      ${quoteCarouselItem}
    }
  }
`

export const person = `
  ... on Person {
    personName
    role
    image {
      ... on Image {
        umbracoAlternateText
        name
      }
      ${smallSquareImage}
      ${blurUrl}
    }
    biography
    showBioLink
    quotes {
      ${quoteCarouselItem}
    }  
    bioLinkText 
  }
`

export const peopleListComponent = `
 ... on PeopleListComponent {
   title
   teamMembers {
    ${person}
   }
   formPagePicker {
    target
    url
    name
   }
   threeColumnLayout
 }
`

export const imageOrVideoComponent = `
  ... on ImageOrVideoComponent {
    image {
      ... on Image {
        umbracoAlternateText
        name
      }
      ${wideImage}
      ${blurUrl}
    }
    videoSrc
    caption
  }
`

export const projectsRelatedContentComponent = `
  ... on ProjectsRelatedContent {
    title
    blueBg
    viewAllLink {
      url
      name
    }
    relatedProjects {
      name
      url
      ... on ProjectPage {
        pageTitle
        label
        introductionText
        image {
          ... on Image {
            umbracoAlternateText
            name
          }
          ${largeBannerImage}
          ${narrowBannerImage}
          ${featuredImage}
          ${blurUrl}
          ${featuredListingImage}
          ${featuredSecondaryListingImage}
          url
        }

      }
      
    }
    featured
    inlineCTA {
      ${inlineCtaComponent}
    }
  }
`

export const relatedNewsAndInsightsComponent = `
  ... on NewsInsightsRelatedContent {
    title
    blueBg
    relatedNewsAndInsights {
      name
      url
      ${pages}
    }
    allNewsCTA {
      name
      url 
    }
    allInsightsCTA {
      name
      url 
    }
  }
`

export const socialCtaComponent = `
  ... on SocialCTAComponent {
    title
    socialCTAItems {
      ... on SocialCTAItem {
        title
        type
        introText
        link {
          name
          url
        } 
      }
    }
  }
`

export const statisticsComponent = `
  ... on StatisticsComponent {
    title
    stats {
      ... on StatItem {
        title
        subtitle
        introText
      }
    }
  }
`

export const stylizedTextImageComponent = `
  ... on StylizedTextImageComponent {
    title
    richText
    image {
      ${largeSquareImage}
      ${blurUrl}
    }
    optionalLink {
      name
      url
      target
    }
  }
`

export const textComponent = `
  ... on TextComponent {
      items {
      ... on TextComponentItem {
        blueBackground
        title
        richText
        reportCTA {
          name
          url
        }
        link {
          url
          name
        }
      }
    }
  }
`

export const threeColumnTextImageComponent = `
  ... on ThreeColumnTextImageComponent {
    title
    pages {
      ${pages}
    }

    link {
      url
      name
    }
    mobileView
    inlineCTA {
      ${inlineCtaComponent}
    }
  }
`

export const groupStylizedTextImageComponent = `
  ... on GroupStylizedTextImageComponent {
    title
    groupStylizedTextImageItems {
      ... on GroupStylizedTextImageItem {
        title
        richText
        image {
          ${largeSquareImage}
          ${blurUrl}
          ... on Image {
            umbracoAlternateText
            name
          }
        }
        imagePosition
        link {
          name
          url
        }
      }
    }
  }
`

export const threeColumnTextComponent = `
  ... on ThreeTextColumnComponent {
    title
    threeColumnTextItems {
      ... on ThreeColumnTextItem {
        title
        text
      }
    }
  }
`

export const accordionComponent = `
  ... on AccordionComponent {
    accordionItems {
      ... on AccordionItem {
        title
        people {
          ${person}
        }
      }
    }
  }
`

export const videoBackground = `
    ... on VideoBackgroundBannerComponent {
      preloadImage {
        ... on Image {
          umbracoAlternateText
          name
        }
        url
      }
      category
      introText
      link {
        name
        url
      }
      title
      video {
        url
      }
    }
`

export const carousel = `
    ... on HomepageCarouselItem {
      title
      text
      link {
        url
        name
      }
      image {
        ... on Image {
          umbracoAlternateText
          name
        }
        name
        url
      }
    }
    }
`

export const components = `
  ${accordionComponent}
  ${airportsGridComponent}
  ${awardListComponent}
  ${contentCarouselComponent}
  ${ctaComponent}
  ${fourColumnTextComponent}
  ${genericLandingComponent}
  ${groupStylizedTextImageComponent}
  ${imageCarouselComponent}
  ${inlineCtaComponent}
  ${relatedNewsAndInsightsComponent}
  ${officesAccordionComponent}
  ${peopleListComponent}
  ${projectsRelatedContentComponent}
  ${quoteCarouselComponent}
  ${socialCtaComponent}
  ${statisticsComponent}
  ${stylizedTextImageComponent}
  ${textComponent}
  ${threeColumnTextComponent}
  ${threeColumnTextImageComponent}
  ${imageOrVideoComponent}
  ${videoBackground}
`

export const filters = `
  locations {
    ... on CountryPage {
      url
      ${pageBaseProperties}
    }
    ... on ContinentPage {
      url
      ${pageBaseProperties}
    }
  }
  sectors {
    ... on SectorPage {
      url
      ${pageBaseProperties}
    }
  }
  services {
    ... on ServicesPage {
      url
      ${pageBaseProperties}
    }
  }
`
