import { createMockClient } from '@apollo/client/testing'
import fetchRoutes, { ALL_ROUTES_QUERY } from './fetchRoutes'
import {
  mockAboutItem,
  mockCareersItem,
  mockContinentItem,
  mockCountryItem,
  mockContactUsItem,
  mockCSRItem,
  mockEventDetailItem,
  mockWebinarItem,
  mockHomeItem,
  mockInsightItem,
  mockInsightsListingItem,
  mockNewsDetailItem,
  mockPDFDownloadItem,
  mockProjectItem,
  mockProjectListingItem,
  mockServiceItem,
  mockSectorItem,
  mockSubServiceItem,
  mockSubSectorItem,
  mockStandardContentItem,
  mockPressMediaItem,
  mockAllNewsListingItem,
  mockAllOfficePage,
  mockAllNewsletterItem,
  mockAllPeopleItem,
  mockAllThankYouItem,
  mockSearchResultsItem,
  mockEventsListingItem,
  mockAllWebinarListingItem,
  mockAllContactUsSectorService,
} from './fetchRoutes.mockData'

const mockApolloClient = createMockClient(
  {
    allAboutPage: {
      items: [mockAboutItem],
    },
    allCareersPage: {
      items: [mockCareersItem],
    },
    allContinentPage: {
      items: [mockContinentItem],
    },
    allCountryPage: {
      items: [mockCountryItem],
    },
    allCSRPage: {
      items: [mockCSRItem],
    },
    allEventDetailPage: {
      items: [mockEventDetailItem],
    },
    allWebinarPage: {
      items: [mockWebinarItem],
    },
    allHomePage: {
      items: [mockHomeItem],
    },
    allInsightPage: {
      items: [mockInsightItem],
    },
    allNewsDetailPage: {
      items: [mockNewsDetailItem],
    },
    allPDFDownloadPage: {
      items: [mockPDFDownloadItem],
    },
    allProjectPage: {
      items: [mockProjectItem],
    },
    allSectorPage: {
      items: [mockSectorItem],
    },
    allServicesPage: {
      items: [mockServiceItem],
    },
    allStandardContentPage: {
      items: [mockStandardContentItem],
    },
    allSubSectorPage: {
      items: [mockSubSectorItem],
    },
    allSubServicePage: {
      items: [mockSubServiceItem],
    },
    allContactUs: {
      items: [mockContactUsItem],
    },
    allPressMediaPage: {
      items: [mockPressMediaItem],
    },
    allProjectListingPage: {
      items: [mockProjectListingItem],
    },
    allInsightsListing: {
      items: [mockInsightsListingItem],
    },
    allAllNews: {
      items: [mockAllNewsListingItem],
    },

    allOfficePage: {
      items: [mockAllOfficePage],
    },
    allNewsletterPage: {
      items: [mockAllNewsletterItem],
    },
    allPeoplePage: {
      items: [mockAllPeopleItem],
    },
    allThankYouPage: {
      items: [mockAllThankYouItem],
    },
    allSearchResults: {
      items: [mockSearchResultsItem],
    },
    allEventsListingPage: {
      items: [mockEventsListingItem],
    },
    allWebinarListingPage: {
      items: [mockAllWebinarListingItem],
    },
    allContactUsSectorService: {
      items: [mockAllContactUsSectorService],
    },
  },
  ALL_ROUTES_QUERY(false)
)

describe('fetchRoutes utility function', () => {
  it('should return correct data', async () => {
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockAboutItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockCareersItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockContinentItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockCountryItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockCSRItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockEventDetailItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockWebinarItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockHomeItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockInsightItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockNewsDetailItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockPDFDownloadItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockProjectItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockSectorItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockStandardContentItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockSubSectorItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockPressMediaItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockStandardContentItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockSubServiceItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockContactUsItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockAllOfficePage)

    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockAllThankYouItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockSearchResultsItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockAllPeopleItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockAllNewsletterItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockEventsListingItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockAllWebinarListingItem)
    expect(
      await fetchRoutes({ apolloClient: mockApolloClient })
    ).toContainEqual(mockAllContactUsSectorService)
  })
})
