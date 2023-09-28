import React, { useEffect, useState } from 'react'
import { AllNewsPage as AllNewsPageType, NewsDetailPage } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import TopNav from '../../components/organisms/TopNav/TopNav'
import Pagination from '../../components/organisms/Pagination/Pagination'
import GenericLandingItem from '../../components/molecules/GenericLandingComponent/GenericLandingComponent'
import axios from 'axios'
import FiltersHeader from '../../components/organisms/FiltersHeader/FiltersHeader'
import formatToMomentDate, { generateFilter } from '../../utils/helpers'
import Filters from '../../components/molecules/Filters/Filters'
import { useRouter } from 'next/router'
import Cta from '../../components/contentTypes/Cta/Cta'
import Footer from '../../components/organisms/Footer/Footer'
import Spinner from '../../components/atoms/Spinner/Spinner'
import clsx from 'clsx'
import { FormattedMessage } from 'react-intl'
import Translation from '../../components/organisms/Translation/Translation'

interface AllNewsPageProps {
  data: AllNewsPageType
}

export const AllNewsPage = ({ data }: AllNewsPageProps) => {
  const router = useRouter()
  const { order } = router?.query
  const [listingItems, setListingItems] = useState<JSX.Element[]>([])
  const [filters, setFilters] = useState<any | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { locale } = useRouter()

  const news =
    locale === 'en'
      ? 'News'
      : locale === 'fr'
      ? 'Actualités'
      : locale === 'pt'
      ? 'Notícias'
      : locale === 'es'
      ? 'Noticias'
      : ''

  const handleData = (data: []) => {
    createFilters(data)

    const items: JSX.Element[] = []
    data.map((item: NewsDetailPage, index) => {
      let newsItemLocations: any[] = []
      item.location.map((country: { pageTitle: string }) =>
        newsItemLocations.push(country.pageTitle?.trim())
      )

      if (
        !router?.query?.location ||
        newsItemLocations.includes(router.query.location)
      ) {
        items.push(
          <div
            className={clsx('pt-5 md:mx-5 col-span-full', {
              'border-t border-gray-light': index !== 0,
            })}
            key={`genericLandingItem_${index}`}
          >
            <GenericLandingItem
              firstTag={news}
              secondTag={formatToMomentDate(item.publishedDate)}
              thirdTag={
                <FormattedMessage
                  defaultMessage="{duration} Mins"
                  description="Word for minutes"
                  values={{ duration: item.minutesRead }}
                />
              }
              linkTo={item.url}
              image={item.image}
              title={item.name}
              content={item.introductionText}
              newsItem
            />
          </div>
        )
      }
    })

    setIsLoading(false)
    setListingItems(items)
  }

  const locationLabel = data.locationsLabel || 'Location'
  const oldestTitle = data.oldestTitle || 'Oldest'
  const newestTitle = data.newestTitle || 'Newest'
  const resetLabel = data.resetLabel || 'Reset'

  const createFilters = (data: any) => {
    const locationsFilter = generateFilter(
      data,
      locationLabel,
      'location',
      'location'
    )
    const orderFilter = {
      title: order?.includes('asc') ? oldestTitle : newestTitle,
      optionGroups: [
        {
          options: [
            { label: newestTitle, value: 'desc' },
            { label: oldestTitle, value: 'asc' },
          ],
        },
      ],
      type: 'order',
    }
    setFilters([{ ...locationsFilter }, { ...orderFilter }])
  }

  const loadNews = async () => {
    let locale = router.locale
    try {
      return await axios
        .get(`/api/getNews?order=${order}&locale=${locale}`)
        .then(({ data }) => handleData(data as []))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadNews()
    setIsLoading(true)
  }, [router?.query?.location, router?.query?.order, router.locale])

  return (
    <div className="flex flex-col min-h-screen">
      <CoreMetadata data={data} />

      {data.navigation && (
        <TopNav
          primaryLinks={data.navigation[0]?.primaryLinks}
          secondaryLinks={data.navigation[0]?.secondaryLinks}
          url_en={data?.url_en}
          url_fr={data?.url_fr}
          url_es={data?.url_es}
          url_pt={data?.url_pt}
          pageTitle={data?.pageTitle!}
        />
      )}
      <Translation data={data} />

      {isLoading ? (
        <div className="flex-1 flex items-center justify-center border-b border-t border-gray-light">
          <Spinner width={150} height={150} />
        </div>
      ) : (
        <>
          <div className="container">
            <FiltersHeader
              breadcrumbs={[{ text: data.pageTitle }]}
              title={data.pageTitle}
              level={3}
              filters={
                <Filters
                  resetLabel={resetLabel}
                  url={data.url}
                  filters={filters}
                />
              }
              endGridLine
            />
          </div>

          <div className="flex-1">
            <Pagination items={listingItems} itemsPerPage={6} edges />
          </div>

          {data.cTAComponent && data.cTAComponent[0] && (
            <Cta {...data.cTAComponent[0]} />
          )}
        </>
      )}

      {data.footer && <Footer {...data.footer} />}
    </div>
  )
}
