import { gql } from '@apollo/client'
import { PageTypeNames } from '../types/CMS'
import {
  blurUrl,
  featuredImage,
  animatedBannerImage,
  ctaImage,
} from './componentFragmentImages'
import {
  pageBaseProperties,
  components,
  ctaComponent,
  person,
  projectsRelatedContentComponent,
  relatedNewsAndInsightsComponent,
  downloadItem,
  officesAccordionComponent,
  filters,
  textComponent,
  contentCarouselComponent,
  threeColumnTextComponent,
  videoBackground,
  carousel,
  genericLandingComponent,
  pageBasePropertiesWithLocale,
} from './componentFragments'

export const pageMetadataProperties = `
  seoTitle
  seoDescription
  hideFromSearchEngines
  oGTitle
  oGType
  oGImage {
    url
  }
  oGDescription
  oGUrl {
    url
  }
  oGLocale
  oGLocaleAlternate
`

export const siteSettingsProperties = `
  siteName
  primaryLanguageList
`

export const FRAGMENT_ABOUT_PAGE = gql`
  fragment AboutPage on AboutPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    introText
    videoSrc
    contactLink {
      url
      name
      target
    }
    components {
      ${components}
    }
  }
`

export const FRAGMENT_ALL_NEWS_PAGE = gql`
  fragment AllNews on AllNews {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    cTAComponent {
      ${ctaComponent}
    }
    locationsLabel
    newestTitle
    oldestTitle
    resetLabel
    id
  }
`

export const FRAGMENT_CONTINTENT_PAGE = (locale = 'en') => gql`
  fragment ContinentPage on ContinentPage {
    ${pageMetadataProperties}
    ${pageBasePropertiesWithLocale(locale)}

    id
    introText
    components {
      ${components}
    }
    relatedContent1 {
      ${projectsRelatedContentComponent}
    }
    relatedContent2 {
      ${relatedNewsAndInsightsComponent}
    }
    socialNetworks {
      ... on SocialFollowItem {
        socialPlatform
        uRL
      }
    }
    descendants {
      items {
        name
        url
      }
    }
    secondaryNavigationTitle
    ancestors {
      items {
        name(culture: "${locale}")
        url(culture: "${locale}")
      }
    }
  }
`

export const FRAGMENT_COUNTRY_PAGE = (locale = 'en') => gql`
  fragment CountryPage on CountryPage {
    ${pageMetadataProperties}
    ${pageBasePropertiesWithLocale(locale)}

    id
    introText
    components {
      ${components}
    }
    socialNetworks {
      ... on SocialFollowItem {
        socialPlatform
        uRL
      }
    }
    relatedProjects {
      ${projectsRelatedContentComponent}
    }
    relatedNewsInsights {
      ${relatedNewsAndInsightsComponent}
    }
    parent {
      name
      url
    }
    socialFollowTitle
    ancestors {
      items {
        name(culture: "${locale}")
        url(culture: "${locale}")
      }
    }
  }
`

export const FRAGMENT_EVENT_DETAIL_PAGE = gql`
  fragment EventDetailPage on EventDetailPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    id
    socialNetworks
    startDate
    endDate
    durationFrom
    durationTo
    timeZone
    eventLabel
    richText
    registerLink {
      url
      name
    }
    components {
      ${components}
    }
    parent {
      name
      url
    }
  }
`

export const FRAGMENT_WEBINAR_PAGE = gql`
  fragment WebinarPage on WebinarPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    videoSrc
    socialPlatforms
    startDate
    endDate
    durationFrom
    durationTo
    timeZone
    webinarLabel
    components {
      ${components}
    }
    parent {
      name
      url
    }
  }
`

export const FRAGMENT_CSR_PAGE = gql`
  fragment CSRPage on CSRPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    videoSrc
    introText
    components {
      ${components}
    }
    formPagePicker {
      name
      url
    }
  }
`

export const FRAGMENT_PRESSMEDIA_PAGE = gql`
  fragment PressMediaPage on PressMediaPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    link {
      url
      name
    }
    latestNewsTitle
    inlineCTA {
      __typename
      ... on InclineCTAComponent {
        link {
          url
          name
        }
        text
        title
      }
    }
    components {
      ${components}
    }
  }
`

export const FRAGMENT_INSIGHT_PAGE = (locale = 'en') => gql`
  fragment InsightPage on InsightPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    publishedDate
    minutesRead
    components {
      ${components}
    }
    relatedNewsInsights {
      ${relatedNewsAndInsightsComponent}
    }
    insightTag {
      name
    }
    cTAComponent {
      ${ctaComponent}
    }
    socialPlatforms
    parent {
      name
      url
    }
    ancestors {
      items {
        name(culture: "${locale}")
        url(culture: "${locale}")
      }
    }
  }
`

export const FRAGMENT_INSIGHTS_LISTING_PAGE = gql`
  fragment InsightsListing on InsightsListing {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    cTAComponent {
      ${ctaComponent}
    }
    tagsLabel
    id
  }
`

export const FRAGMENT_CAREERS_PAGE = gql`
  fragment CareersPage on CareersPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    videoSrc
    introText
    components {
      ${components}
    }
    link {
      name
      url
    }
    richText
  }
`

export const FRAGMENT_NEWS_DETAIL_PAGE = (locale = 'en') => gql`
  fragment NewsDetailPage on NewsDetailPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    publishedDate
    minutesRead
    socialPlatforms
    videoSrc
    contactLink {
      url
      name
    }
    richText
    peopleList {
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
   }
    components {
      ${components}
    }
    cTAComponent {
      ${ctaComponent}
    }
    relatedContent {
      ${relatedNewsAndInsightsComponent}
    }
    ancestors {
      items {
        name(culture: "${locale}")
        url(culture: "${locale}")
      }
    }
  }
`

export const FRAGMENT_PROJECT_PAGE = gql`
  fragment ProjectPage on ProjectPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    ${filters}
    id
    components {
      ${components}
    }
    socialPlatforms
    contactLink {
      name
      url
    }
    parent {
      name
      url
    }
  }
`

export const FRAGMENT_PEOPLE_PAGE = gql`
  fragment PeoplePage on PeoplePage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    id
    components {
      ${components}
    }
    joinedInText
    roleText
    fullName
    locationText
    socialShare
    introText
    parent {
      name
      url
    }
    videoSrc
  }
`

export const FRAGMENT_PROJECT_LISTING_PAGE = gql`
  fragment ProjectListingPage on ProjectListingPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    featuredProjects {
      ... on ProjectPage {
        id
      }
    }
    resetLabel
    noResultsText
    sectorsLabel
    servicesLabel
    locationsLabel
    refreshButtonText
    id
  }
`

export const FRAGMENT_HOME_PAGE = gql`
  fragment HomePage on HomePage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    introText {
      ${textComponent}
    }
    

    id
    heroBannerItems {
      ... on HomeBannerItem {
        title
        introText
        navText
        image {
          ... on Image {
            umbracoAlternateText
            name
          }
          ${animatedBannerImage}
          ${blurUrl}
          url
        }
        link {
          name
          url
        }
      }
    }
    cTA {
      ${ctaComponent}
    }
    relatedNewsInsights {
      ${relatedNewsAndInsightsComponent}
    }
    contentCarousel {
      ${contentCarouselComponent}
    }
    threeColumnTextTitle
    threeColumnText {
        ... on ThreeColumnTextItem {
          text
          title
        }
      }
      videoBackground {
        ${videoBackground}
      }
      carouselComponentTitle
      carousel {
        ${carousel}
  }
`

export const FRAGMENT_SECTOR_PAGE = (locale = 'en') => gql`
  fragment SectorPage on SectorPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    descendants {
      items {
        name
        url
      }
    }
    introText
    formPagePicker {
      url
      target
      name
    }
    secondaryNavigationTitle
    richText
    components {
      ${components}
    }
    ancestors {
      items {
        name(culture: "${locale}")
        url(culture: "${locale}")
      }
    }
  }
`

export const FRAGMENT_SERVICE_PAGE = (locale = 'en') => gql`
  fragment ServicesPage on ServicesPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    descendants {
      items {
        name
        url
      }
    }
    introText
    formPagePicker {
      url
      target
      name
    }
    secondaryNavigationTitle
    richText
    components {
      ${components}
    }
    ancestors {
      items {
        name(culture: "${locale}")
        url(culture: "${locale}")
      }
    }
  }
`

export const FRAGMENT_SUB_SECTOR_PAGE = (locale = 'en') => gql`
  fragment SubSectorPage on SubSectorPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    formPagePicker {
      url
      target
      name
    }
    introText
    richText
    components {
      ${components}
    }
    parent {
      name
      url
    }
    ancestors {
      items {
        name(culture: "${locale}")
        url(culture: "${locale}")
      }
    }
  }
`

export const FRAGMENT_SUB_SERVICE_PAGE = gql`
  fragment SubServicePage on SubServicePage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    formPagePicker {
      url
      target
      name
    }
    introText
    richText
    components {
      ${components}
    }
    parent {
      name
      url
    }
  }
`

export const FRAGMENT_PDF_DOWNLOAD_PAGE = gql`
  fragment PDFDownloadPage on PDFDownloadPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    id
    downloadItems {
      ${downloadItem}
    }
  }
`

export const FRAGMENT_STANDARD_PAGE = (locale = 'en') => gql`
  fragment StandardContentPage on StandardContentPage {
    ${pageMetadataProperties}
    url_en: url(culture: "en")
    url_fr: url(culture: "fr")
    url_pt: url(culture: "pt")
    url_es: url(culture: "es")
    id
    pageTitle
    components {
      ${components}
    }
    ancestors {
      items {
        name(culture: "${locale}")
        url(culture: "${locale}")
      }
    }
  }
`

export const FRAGMENT_CONTACT_US_PAGE = gql`
  fragment ContactUs on ContactUs {
    ${pageMetadataProperties}
    id
    pageTitle
    office {
      ${officesAccordionComponent}
    }
    headline
    address
    contactNumber
    getInTouchLink {
      name
      url
    }
  }
`

export const FRAGMENT_OFFICE_PAGE = (locale = 'en') => gql`
  fragment OfficePage on OfficePage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    id
    pageTitle
    officeName
      address

      contactNumber
      ancestors {
      items {
        name(culture: "${locale}")
        url(culture: "${locale}")
      }
    }
    latitude
    longitude
    formComponent {
      ... on FormComponent {
        formTitle
        formText
        form
        formId
        emailTo
        thankYouPageLink {
            name
            url
          }
      }
    }
    publicationComponent {
      ${genericLandingComponent}
    }
  }
`

export const FRAGMENT_NEWSLETTER_SUBSCRIPTION_PAGE = gql`
  fragment NewsletterPage on NewsletterPage {
    ${pageMetadataProperties}
    ${pageBaseProperties}
    id
    pageTitle
    subscriptionTitle
    requiredFieldsText
    newsletterFormId
    newsletterForm
    emailTo
    thankYouPageLink {
            name
            url
          }
  }
`

export const FRAGMENT_THANK_YOU_PAGE = gql`
fragment ThankYouPage on ThankYouPage {
    ${pageMetadataProperties}
    id
    pageTitle
    introductionText
    relatedContent {
      ${relatedNewsAndInsightsComponent}
    }
  }
`

export const FRAGMENT_SEARCH_RESULTS_PAGE = gql`
  fragment SearchResults on SearchResults {
    ${pageMetadataProperties}
    pageTitle
    id
    allLabel
  }
`

export const FRAGMENT_EVENT_LISTING_PAGE = gql`
 fragment EventsListingPage on EventsListingPage {
  ${pageMetadataProperties} 
  ${pageBaseProperties}
  upcomingEventsTitle
  cTAComponent {
        ... on CTAComponent {
          title
          introText
          image {
            ${ctaImage}
            ${blurUrl}
            url
          }
          link {
            name
            url
          }
          linkType
          dDLBackgroundColor
        }
      }
  webinarsTitle
  viewAll {
        name
        url
      }
 }
`

export const FRAGMENT_CONTACT_US_SERVICE_SECTOR_PAGE = gql`
  fragment ContactUsSectorService on ContactUsSectorService {
    ${pageMetadataProperties}
    ${pageBaseProperties}

    parent {
      name
      url
    }
    formComponent {
      ... on FormComponent {
        formTitle
        formText
        form
        formId
        emailTo
        thankYouPageLink {
            name
            url
          }
      }
    }
  }
`

export const FRAGMENT_WEBINAR_LISTING_PAGE = gql`
 fragment WebinarListingPage on WebinarListingPage {
  ${pageMetadataProperties} 
  ${pageBaseProperties}
  cTA {
        ... on CTAComponent {
          title
          introText
          image {
            ${featuredImage}
            ${blurUrl}
            url
          }
          link {
            name
            url
          }
          linkType
          dDLBackgroundColor
        }
      }

 }
`

export const getPageFragment = (type: PageTypeNames, locale?: string) => {
  switch (type) {
    case PageTypeNames.ABOUT_PAGE:
      return FRAGMENT_ABOUT_PAGE

    case PageTypeNames.ALL_NEWS_PAGE:
      return FRAGMENT_ALL_NEWS_PAGE

    case PageTypeNames.CONTINENT_PAGE:
      return FRAGMENT_CONTINTENT_PAGE(locale)

    case PageTypeNames.COUNTRY_PAGE:
      return FRAGMENT_COUNTRY_PAGE(locale)

    case PageTypeNames.EVENT_DETAIL_PAGE:
      return FRAGMENT_EVENT_DETAIL_PAGE

    case PageTypeNames.WEBINAR_PAGE:
      return FRAGMENT_WEBINAR_PAGE

    case PageTypeNames.HOME_PAGE:
      return FRAGMENT_HOME_PAGE

    case PageTypeNames.INSIGHT_PAGE:
      return FRAGMENT_INSIGHT_PAGE(locale)

    case PageTypeNames.INSIGHTS_LISTING_PAGE:
      return FRAGMENT_INSIGHTS_LISTING_PAGE

    case PageTypeNames.NEWS_DETAIL_PAGE:
      return FRAGMENT_NEWS_DETAIL_PAGE(locale)

    case PageTypeNames.PDF_DOWNLOAD_PAGE:
      return FRAGMENT_PDF_DOWNLOAD_PAGE

    case PageTypeNames.PROJECT_PAGE:
      return FRAGMENT_PROJECT_PAGE

    case PageTypeNames.PROJECT_LISTING_PAGE:
      return FRAGMENT_PROJECT_LISTING_PAGE

    case PageTypeNames.SECTOR_PAGE:
      return FRAGMENT_SECTOR_PAGE(locale)

    case PageTypeNames.SERVICES_PAGE:
      return FRAGMENT_SERVICE_PAGE(locale)

    case PageTypeNames.SUB_SERVICE_PAGE:
      return FRAGMENT_SUB_SERVICE_PAGE

    case PageTypeNames.SUB_SECTOR_PAGE:
      return FRAGMENT_SUB_SECTOR_PAGE(locale)

    case PageTypeNames.STANDARD_PAGE:
      return FRAGMENT_STANDARD_PAGE(locale)

    case PageTypeNames.CAREERS_PAGE:
      return FRAGMENT_CAREERS_PAGE

    case PageTypeNames.CSR_PAGE:
      return FRAGMENT_CSR_PAGE

    case PageTypeNames.PRESSMEDIA_PAGE:
      return FRAGMENT_PRESSMEDIA_PAGE

    case PageTypeNames.CONTACT_US_PAGE:
      return FRAGMENT_CONTACT_US_PAGE

    case PageTypeNames.OFFICE_PAGE:
      return FRAGMENT_OFFICE_PAGE(locale)

    case PageTypeNames.NEWSLETTER_SUBSCRIPTION_PAGE:
      return FRAGMENT_NEWSLETTER_SUBSCRIPTION_PAGE

    case PageTypeNames.PEOPLE_PAGE:
      return FRAGMENT_PEOPLE_PAGE

    case PageTypeNames.THANK_YOU_PAGE:
      return FRAGMENT_THANK_YOU_PAGE

    case PageTypeNames.SEARCH_RESULTS_PAGE:
      return FRAGMENT_SEARCH_RESULTS_PAGE

    case PageTypeNames.EVENT_LISTING_PAGE:
      return FRAGMENT_EVENT_LISTING_PAGE

    case PageTypeNames.WEBINAR_LISTING_PAGE:
      return FRAGMENT_WEBINAR_LISTING_PAGE

    case PageTypeNames.CONTACT_US_SECTOR_SERVICE_PAGE:
      return FRAGMENT_CONTACT_US_SERVICE_SECTOR_PAGE
  }
}
