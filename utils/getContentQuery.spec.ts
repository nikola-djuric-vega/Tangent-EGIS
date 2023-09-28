import { gql } from '@apollo/client'
import { PageTypeNames } from '../types/CMS'
import { getPageFragment } from './fragments'
import getContentQuery from './getContentQuery'

const url = '/test'
const types = [
  PageTypeNames.HOME_PAGE,
  PageTypeNames.PROJECT_PAGE,
  PageTypeNames.PROJECT_LISTING_PAGE,
  PageTypeNames.SECTOR_PAGE,
  PageTypeNames.SERVICES_PAGE,
  PageTypeNames.SUB_SERVICE_PAGE,
  PageTypeNames.SUB_SECTOR_PAGE,
  PageTypeNames.STANDARD_PAGE,
  PageTypeNames.CAREERS_PAGE,
  PageTypeNames.CSR_PAGE,
  PageTypeNames.PRESSMEDIA_PAGE,
  PageTypeNames.CONTACT_US_PAGE,
  PageTypeNames.OFFICE_PAGE,
  PageTypeNames.NEWSLETTER_SUBSCRIPTION_PAGE,
  PageTypeNames.NEWS_DETAIL_PAGE,
  PageTypeNames.ALL_NEWS_PAGE,
  PageTypeNames.PEOPLE_PAGE,
  PageTypeNames.THANK_YOU_PAGE,
  PageTypeNames.SEARCH_RESULTS_PAGE,
  PageTypeNames.CONTACT_US_SECTOR_SERVICE_PAGE,
  PageTypeNames.WEBINAR_LISTING_PAGE,
  PageTypeNames.EVENT_LISTING_PAGE,
  PageTypeNames.EVENT_DETAIL_PAGE,
  PageTypeNames.PDF_DOWNLOAD_PAGE,
  PageTypeNames.INSIGHTS_LISTING_PAGE,
  PageTypeNames.INSIGHT_PAGE,
  PageTypeNames.ABOUT_PAGE,
  PageTypeNames.CONTINENT_PAGE,
  PageTypeNames.COUNTRY_PAGE,
  PageTypeNames.WEBINAR_PAGE,
]

describe('fetchRoutes utility function', () => {
  it.each(types)('should return correct data', async (type) => {
    const gqlData = getContentQuery({
      searchProperty: 'url',
      searchValue: url,
      type,
    })

    expect(gqlData).toEqual(gql`
      ${getPageFragment(type)}

      query {
        content(url: "${url}", culture: "en",  preview: false) {
          name
          url

          ...${type}
        }
      }
    `)
  })
})
