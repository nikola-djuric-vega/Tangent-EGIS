import {
  AboutPage,
  AllNewsPage,
  ProjectListingPage,
  ProjectPage,
  SiteSettings,
  PageMetadata,
  HomePage,
  InsightsListingPage,
  InsightPage,
  Media,
  NewsDetailPage,
  SectorPage,
  ServicesPage,
  SubSectorPage,
  CountryPage,
  ContinentPage,
  EventDetailPage,
  PDFDownloadPage,
  StandardPage,
  WebinarPage,
  CareerPage,
  CSRPage,
  PressMediaPage,
  SubServicePage,
  ContactUsPage,
  OfficePage,
  NewsletterSubscriptionPage,
  PeoplePage,
  ThankYouPage,
  SearchResultsPage,
  EventsListingPage,
  WebinarListingPage,
  ContactUsSectorServicePage,
} from '.'

export interface PageBase {
  id: string
  url_en: string
  url_fr: string
  url_es?: string
  url_pt?: string
  url_de?: string
  contentTypeAlias: string
  pageTitle?: string
  videoSrc?: string
  introductionText: string
  image?: Media
  relatedContentTag: string[]
  relatedContentTypes: string[]
  navigation: Navigation[]
  footer: Footer
}

export enum PageTypeNames {
  ABOUT_PAGE = 'AboutPage',
  ALL_NEWS_PAGE = 'AllNews',
  CAREERS_PAGE = 'CareersPage',
  CONTINENT_PAGE = 'ContinentPage',
  COUNTRY_PAGE = 'CountryPage',
  CSR_PAGE = 'CSRPage',
  EVENT_DETAIL_PAGE = 'EventDetailPage',
  WEBINAR_PAGE = 'WebinarPage',
  HOME_PAGE = 'HomePage',
  INSIGHTS_LISTING_PAGE = 'InsightsListing',
  INSIGHT_PAGE = 'InsightPage',
  NEWS_DETAIL_PAGE = 'NewsDetailPage',
  PDF_DOWNLOAD_PAGE = 'PDFDownloadPage',
  PROJECT_LISTING_PAGE = 'ProjectListingPage',
  PROJECT_PAGE = 'ProjectPage',
  SECTOR_PAGE = 'SectorPage',
  SERVICES_PAGE = 'ServicesPage',
  SUB_SECTOR_PAGE = 'SubSectorPage',
  SUB_SERVICE_PAGE = 'SubServicePage',
  STANDARD_PAGE = 'StandardContentPage',
  PRESSMEDIA_PAGE = 'PressMediaPage',
  CONTACT_US_PAGE = 'ContactUs',
  OFFICE_PAGE = 'OfficePage',
  NEWSLETTER_SUBSCRIPTION_PAGE = 'NewsletterPage',
  PEOPLE_PAGE = 'PeoplePage',
  THANK_YOU_PAGE = 'ThankYouPage',
  SEARCH_RESULTS_PAGE = 'SearchResults',
  EVENT_LISTING_PAGE = 'EventsListingPage',
  WEBINAR_LISTING_PAGE = 'WebinarListingPage',
  CONTACT_US_SECTOR_SERVICE_PAGE = 'ContactUsSectorService',
}

export interface CmsRouteItem {
  __typename: PageTypeNames
  url: string
  url_fr: string
  url_es?: string
  url_pt?: string
  id: string
  updateDate: string
  hideFromXMLSitemap: boolean
  searchEngineChangeFrequency: string
  searchEngineRelativePriority: string
}

export interface CmsRoute {
  [key: string]: {
    items: CmsRouteItem[]
  }
}

export interface NavigationItem {
  __typename?: PageTypeNames | string
  navItemName: { __typename: string; name: string; target?: any; url: string }
  text?: string
  title?: string
  groups: Groups[]
}

interface Groups {
  __typename: string
  extraSpacing: boolean
  pages: Page[]
  title: string
}

interface Page {
  __typename: string
  name: string
  url: string
}

export interface Navigation {
  primaryLinks: NavigationItem[]
  secondaryLinks: NavigationItem[]
}

export interface Footer {
  subscribeLink: SubscribeLink
  primaryNavigationLinks: SubscribeLink[]
  subscribeText: string
  secondaryFooterNavigation: SubscribeLink[]
  copyrightText: string
  socialFollow: { socialPlatform: string; uRL: string }[]
  socialFollowTitle: string
}

interface SubscribeLink {
  name: string
  url: string
}

export type CmsPage =
  | AboutPage
  | AllNewsPage
  | CareerPage
  | ContinentPage
  | CountryPage
  | CSRPage
  | EventDetailPage
  | WebinarPage
  | HomePage
  | InsightsListingPage
  | InsightPage
  | NewsDetailPage
  | PDFDownloadPage
  | ProjectListingPage
  | ProjectPage
  | SectorPage
  | ServicesPage
  | SubSectorPage
  | SubServicePage
  | StandardPage
  | PressMediaPage
  | ContactUsPage
  | OfficePage
  | NewsletterSubscriptionPage
  | PeoplePage
  | ThankYouPage
  | SearchResultsPage
  | EventsListingPage
  | WebinarListingPage
  | ContactUsSectorServicePage

export interface CmsContentPage<T = CmsPage> {
  content: T
}

export type CorePageProperties = PageBase & SiteSettings & PageMetadata
