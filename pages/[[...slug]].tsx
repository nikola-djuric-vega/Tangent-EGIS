import { GetStaticPathsContext, GetStaticPropsContext } from 'next'
import createApolloClient from '../lib/createApolloClient'
import generateRoute from '../utils/generateRoute'
import paramsToUrl from '../utils/paramsToUrl'
import {
  AllNewsPage as AllNewsPageType,
  CareerPage as CareerPageType,
  CmsContentPage,
  CmsPage,
  CSRPage as CSRPageType,
  PageTypeNames,
  AboutPage as AboutPageType,
  ContinentPage as ContinentPageType,
  CountryPage as CountryPageType,
  EventDetailPage as EventDetailPageType,
  WebinarPage as WebinarPageType,
  HomePage as HomePageType,
  WebinarListingPage as WebinarListingPageType,
  InsightPage as InsightPageType,
  InsightsListingPage as InsightListingPageType,
  NewsDetailPage as NewsDetailPageType,
  SubSectorPage as SubSectorPageType,
  PDFDownloadPage as PDFDownloadPageType,
  ProjectListingPage as ProjectListingPageType,
  ProjectPage as ProjectPageType,
  SectorPage as SectorPageType,
  ServicesPage as ServicesPageType,
  StandardPage as StandardPageType,
  PressMediaPage as PressMediaPageType,
  SubServicePage as SubServicePageType,
  ContactUsPage as ContactUsPageType,
  OfficePage as OfficePageType,
  NewsletterSubscriptionPage as NewsletterPageType,
  PeoplePage as PeoplePageType,
  ThankYouPage as ThankYouPageType,
  SearchResultsPage as SearchResultsPageType,
  EventsListingPage as EventsListingPageType,
  ContactUsSectorServicePage as ContactUsSectorServicePageType,
  CmsRouteItem,
} from '../types/CMS'
import fetchRoutes from '../utils/fetchRoutes'
import getContentQuery from '../utils/getContentQuery'
import {
  AllNewsPage,
  CareersPage,
  AboutPage,
  ContinentPage,
  CountryPage,
  EventDetailPage,
  WebinarPage,
  HomePage,
  InsightPage,
  InsightsListingPage,
  NewsDetailPage,
  ProjectPage,
  ProjectListingPage,
  SectorPage,
  ServicesPage,
  StandardPage,
  SubSectorPage,
  SubServicePage,
  PDFDownloadPage,
  PressMediaPage,
  CSRPage,
  ContactUsPage,
  SearchResultsPage,
  PeoplePage,
  ThankYouPage,
  WebinarListingPage,
} from '../containers'
import fetchNavigation from '../utils/fetchNavigation'
import fetchLatestNews from '../utils/fetchLatestNews'
import fetchFooter from '../utils/fetchFooter'
import OfficePage from '../containers/OfficePage/OfficePage'
import EventsListingPage from '../containers/EventsListingPage/EventsListingPage'
import NewsletterSubscription from '../containers/NewsletterSubscription/NewsletterSubscription'
import { umbracoForms } from '../utils/umbracoForms'
import fetchCookie from '../utils/fetchCookie'
import fetchInsightsListingPage from './api/getInsightsPage'
import ContactUsSectorServicePage from '../containers/ContactUsSectorServicePage/ContactUsSectorServicePage'
import { transformUrl } from '../utils/helpers'
import fetchProject from '../utils/fetchProjects'
import fetchInsights from '../utils/fetchInsights'
import fetchWebinars from '../utils/fetchWebinars'

interface PageProps {
  data: CmsPage
}

export default function Page({ data }: PageProps) {
  switch (data?.__typename) {
    case PageTypeNames.ABOUT_PAGE:
      return <AboutPage data={data as AboutPageType} />

    case PageTypeNames.ALL_NEWS_PAGE:
      return <AllNewsPage data={data as AllNewsPageType} />

    case PageTypeNames.CAREERS_PAGE:
      return <CareersPage data={data as CareerPageType} />

    case PageTypeNames.CONTINENT_PAGE:
      return <ContinentPage data={data as ContinentPageType} />

    case PageTypeNames.COUNTRY_PAGE:
      return <CountryPage data={data as CountryPageType} />

    case PageTypeNames.CSR_PAGE:
      return <CSRPage data={data as CSRPageType} />

    case PageTypeNames.EVENT_DETAIL_PAGE:
      return <EventDetailPage data={data as EventDetailPageType} />

    case PageTypeNames.WEBINAR_PAGE:
      return <WebinarPage data={data as WebinarPageType} />

    case PageTypeNames.HOME_PAGE:
      return <HomePage data={data as HomePageType} />

    case PageTypeNames.INSIGHTS_LISTING_PAGE:
      return <InsightsListingPage data={data as InsightListingPageType} />

    case PageTypeNames.INSIGHT_PAGE:
      return <InsightPage data={data as InsightPageType} />

    case PageTypeNames.NEWS_DETAIL_PAGE:
      return <NewsDetailPage data={data as NewsDetailPageType} />

    case PageTypeNames.PDF_DOWNLOAD_PAGE:
      return <PDFDownloadPage data={data as PDFDownloadPageType} />

    case PageTypeNames.PROJECT_LISTING_PAGE:
      return <ProjectListingPage data={data as ProjectListingPageType} />

    case PageTypeNames.PROJECT_PAGE:
      return <ProjectPage data={data as ProjectPageType} />

    case PageTypeNames.SECTOR_PAGE:
      return <SectorPage data={data as SectorPageType} />

    case PageTypeNames.SERVICES_PAGE:
      return <ServicesPage data={data as ServicesPageType} />

    case PageTypeNames.SUB_SECTOR_PAGE:
      return <SubSectorPage data={data as SubSectorPageType} />

    case PageTypeNames.SUB_SERVICE_PAGE:
      return <SubServicePage data={data as SubServicePageType} />

    case PageTypeNames.STANDARD_PAGE:
      return <StandardPage data={data as StandardPageType} />

    case PageTypeNames.PRESSMEDIA_PAGE:
      return <PressMediaPage data={data as PressMediaPageType} />

    case PageTypeNames.CONTACT_US_PAGE:
      return <ContactUsPage data={data as ContactUsPageType} />

    case PageTypeNames.OFFICE_PAGE:
      return <OfficePage data={data as OfficePageType} />

    case PageTypeNames.NEWSLETTER_SUBSCRIPTION_PAGE:
      return <NewsletterSubscription data={data as NewsletterPageType} />

    case PageTypeNames.PEOPLE_PAGE:
      return <PeoplePage data={data as PeoplePageType} />

    case PageTypeNames.THANK_YOU_PAGE:
      return <ThankYouPage data={data as ThankYouPageType} />

    case PageTypeNames.SEARCH_RESULTS_PAGE:
      return <SearchResultsPage data={data as SearchResultsPageType} />

    case PageTypeNames.EVENT_LISTING_PAGE:
      return <EventsListingPage data={data as EventsListingPageType} />

    case PageTypeNames.WEBINAR_LISTING_PAGE:
      return <WebinarListingPage data={data as WebinarListingPageType} />

    case PageTypeNames.CONTACT_US_SECTOR_SERVICE_PAGE:
      return (
        <ContactUsSectorServicePage
          data={data as ContactUsSectorServicePageType}
        />
      )

    default:
      return null
  }
}

export async function getStaticPaths({
  locales = [],
  defaultLocale = 'en',
}: GetStaticPathsContext) {
  const apolloClient = createApolloClient()
  locales.map(async (locale) => {
    return await fetchRoutes({
      locale: locale,
      apolloClient,
    })
  })

  const allCmsRoutes = await fetchRoutes({
    locale: defaultLocale,
    apolloClient,
  })

  const paths = locales
    .map((locale) => {
      return allCmsRoutes?.map((route) => {
        return generateRoute({ route, locale })
      })
    })
    .flat()

  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({
  locale = 'en',
  params,
  preview,
  defaultLocale,
}: GetStaticPropsContext) {
  let key: keyof CmsRouteItem =
    locale === 'en' ? 'url' : (('url_' + locale) as keyof CmsRouteItem)
  const apolloClient = createApolloClient()
  const paramsData = params && paramsToUrl(params)
  const allCmsRoutes = await fetchRoutes({ apolloClient, preview, locale })
  const cmsRoute = allCmsRoutes.find(
    (route) =>
      transformUrl(route[key] as string) === transformUrl(paramsData?.url!)
  )

  let pageData
  let navigation: { mainNav: any }[] = []
  let news: {} = {}
  let footer: any

  let cookie: any

  let insightsListingData: any

  // If we have a route, get all of the data for that route so we can render the page
  if (paramsData && cmsRoute) {
    const { data, error } = await apolloClient.query<CmsContentPage>({
      query: getContentQuery({
        searchProperty: 'id',
        searchValue: cmsRoute?.id,
        type: cmsRoute?.__typename,
        locale,
        preview,
        defaultLocale,
      }),
    })

    if (!error && data.content) {
      pageData = { ...data.content, cmsRoute }

      navigation = await fetchNavigation({
        apolloClient,
        preview,
        locale,
        defaultLocale,
      })
      cookie = await fetchCookie({ apolloClient, preview, locale })

      if (cookie) {
        pageData = { ...pageData, cookie: cookie }
      }
      if (!!navigation[0].mainNav.length) {
        pageData = { ...pageData, navigation: navigation[0].mainNav }
      }

      footer = await fetchFooter({
        apolloClient,
        preview,
        locale,
        defaultLocale,
      })

      if (footer) pageData = { ...pageData, footer: footer }

      let formComponent: any

      let projects: any

      let insights: any

      let webinars: any

      switch (pageData.__typename) {
        case PageTypeNames.PRESSMEDIA_PAGE:
          news = await fetchLatestNews({ apolloClient, preview, locale })
          pageData = { ...pageData, news }
          break

        case PageTypeNames.INSIGHTS_LISTING_PAGE:
          insightsListingData = await fetchInsightsListingPage({
            apolloClient,
            preview,
            locale,
          })

          insights = await fetchInsights({
            apolloClient,
            preview,
            locale,
          })
          pageData = { ...pageData, insightsListingData, insights }
          break
        case PageTypeNames.NEWSLETTER_SUBSCRIPTION_PAGE:
          const formId = (pageData as NewsletterPageType).newsletterFormId
          if (formId !== null && formId.length > 0) {
            const newsletterForm = await umbracoForms(formId)
            pageData = { ...pageData, newsletterForm }
          }
          break
        case PageTypeNames.OFFICE_PAGE:
          formComponent = (pageData as OfficePageType).formComponent
          if (formComponent !== null && formComponent[0] !== undefined) {
            const formData = await umbracoForms(formComponent[0].formId)
            pageData = { ...pageData, formData }
          }
          break
        case PageTypeNames.CONTACT_US_SECTOR_SERVICE_PAGE:
          formComponent = (pageData as ContactUsSectorServicePageType)
            .formComponent
          if (formComponent !== null && formComponent[0] !== undefined) {
            const formData = await umbracoForms(formComponent[0].formId)
            if (formData['error'] === undefined)
              pageData = { ...pageData, formData }
          }
          break
        case PageTypeNames.PROJECT_LISTING_PAGE:
          projects = await fetchProject({ apolloClient, preview, locale })
          if (projects) {
            pageData = { ...pageData, projects, locale }
          }
          break
        case PageTypeNames.WEBINAR_LISTING_PAGE:
          webinars = await fetchWebinars({ apolloClient, preview, locale })
          if (webinars) {
            pageData = { ...pageData, webinars }
          }
          break
      }
    }
  }

  return {
    props: {
      data: pageData,
      locale,
    },
    // Time in seconds that page revalidation occurs
    revalidate: parseInt(process.env.NEXT_REVALIDATE_DURATION || '60', 10),
    notFound: !pageData,
  }
}
