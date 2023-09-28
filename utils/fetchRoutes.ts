import { ApolloClient, gql, NormalizedCacheObject } from '@apollo/client'
import { CmsRoute } from '../types/CMS'

export const ALL_ROUTES_QUERY = (
  preview = false,
  sitemap = false,
  locale = 'en'
) => gql`
  query {
    allHomePage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allAboutPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allAllNews(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allCareersPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allContinentPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_de: url(culture: "de")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allCountryPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_de: url(culture: "de")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allCSRPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allEventDetailPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allWebinarPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allInsightsListing(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allInsightPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allNewsDetailPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allWebinarListingPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allPDFDownloadPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allProjectListingPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allProjectPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allSectorPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_de: url(culture: "de")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allServicesPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allStandardContentPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allSubSectorPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allPressMediaPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allSubServicePage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allContactUs(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allOfficePage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_de: url(culture: "de")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    },
    allNewsletterPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allPeoplePage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allThankYouPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allSearchResults(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allEventsListingPage(culture: "${locale}", preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
    allContactUsSectorService(preview: ${preview}) {
      items {
        id
        url
        url_fr: url(culture: "fr")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_es: url(culture: "es")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
        url_pt: url(culture: "pt")${
          sitemap
            ? `
          updateDate
          hideFromXMLSitemap
          searchEngineChangeFrequency
          searchEngineRelativePriority`
            : ``
        }
      }
    }
  }
`

interface FetchRoutesArgs {
  apolloClient: ApolloClient<NormalizedCacheObject>
  preview?: boolean
  sitemap?: boolean
  locale: string
}

async function fetchRoutes({
  apolloClient,
  preview,
  sitemap,
  locale,
}: FetchRoutesArgs) {
  const { data } = await apolloClient.query<CmsRoute>({
    query: ALL_ROUTES_QUERY(preview, sitemap, locale),
  })

  const routes = Object.values(data)
    .map((page) => page.items)
    .flat()

  return routes
}

export default fetchRoutes
