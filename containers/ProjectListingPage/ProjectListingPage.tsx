import React, { useEffect, useState } from 'react'
import {
  ProjectListingPage as ProjectListingPageType,
  ProjectPage,
} from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import TopNav from '../../components/organisms/TopNav/TopNav'
import axios from 'axios'
import Pagination from '../../components/organisms/Pagination/Pagination'
import clsx from 'clsx'
import Card from '../../components/molecules/Card/Card'
import FiltersHeader from '../../components/organisms/FiltersHeader/FiltersHeader'
import {
  generateFilter,
  sortFeaturedProjects,
  transformUrl,
  truncateString,
} from '../../utils/helpers'
import Filters from '../../components/molecules/Filters/Filters'
import { useRouter } from 'next/router'
import FeaturedCard from '../../components/molecules/FeaturedCard/FeaturedCard'
import useMobile from '../../utils/useMobile'
import Footer from '../../components/organisms/Footer/Footer'
import Spinner from '../../components/atoms/Spinner/Spinner'
import GridLines, { Grid } from '../../components/atoms/GridLines/GridLines'
import Button from '../../components/atoms/Button/Button'
import RefreshIcon from '../../components/atoms/icons/Refresh/RefreshIcon'
import Translation from '../../components/organisms/Translation/Translation'

interface ProjectListingPageProps {
  data: ProjectListingPageType
}

export const ProjectListingPage = ({ data }: ProjectListingPageProps) => {
  const [results, setResults] = useState<any[] | undefined>(undefined)
  const [listingItems, setListingItems] = useState<JSX.Element[]>([])
  const [filters, setFilters] = useState<any | undefined>(undefined)
  const [initialLoad, setInitialLoad] = useState<boolean>(false)
  const router = useRouter()
  const [projectData, setProjectData] = useState<any>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [noResults, setNoResults] = useState<boolean>(false)
  const [isFirstPage, setIsFirstPage] = useState<boolean>(false)

  const isMobile = useMobile()

  const { featuredProjects } = data

  const handleData = (data: []) => {
    let updatedData = sortFeaturedProjects(data, featuredProjects)
    setResults(updatedData)
    createFilters(updatedData)
    generateList(updatedData)
    filterResults(updatedData)
    setProjectData(updatedData)
  }

  useEffect(() => {
    let currentScreen = isMobile
    let nextScreen = !currentScreen

    if (currentScreen !== nextScreen) {
      if (!!projectData) {
        generateList(projectData)
      }
    }
  }, [isMobile])

  const generateList = (data: any) => {
    let initialLoad = false
    if (router.query) {
      const sectorUrl = typeof router.query.sector
      const serviceUrl = typeof router.query.service
      const locationUrl = typeof router.query.location

      if (
        sectorUrl === 'undefined' &&
        serviceUrl === 'undefined' &&
        locationUrl === 'undefined'
      ) {
        initialLoad = true
        setInitialLoad(true)
      } else {
        initialLoad = false

        setInitialLoad(false)
      }
    }
    const items: JSX.Element[] = []
    data?.map((item: ProjectPage, index: number) => {
      if (
        initialLoad &&
        item.featured &&
        (index === 0 || index === 1 || index === 8 || index === 9)
      ) {
        items.push(
          <div
            data-testid="variant-test"
            key={index}
            className={clsx(
              'col-span-5 relative md:col-span-4 whitespace-normal pb-5 md:pb-8 last:border-none last:pb-0',
              {
                'lg:col-span-6 md:col-span-6 md:ml-5':
                  index === 0 || index === 8,
                'lg:col-span-4 md:mr-5': index === 1 || index === 9,
              }
            )}
          >
            <div
              className={clsx(
                'col-span-5 relative md:col-span-3 pb-5 md:pb-0 overflow-visible',
                index === 0 && 'md:col-span-3 md:col-start-1',
                'border-b border-gray-light md:border-none'
              )}
            >
              {isMobile ? (
                <div className="relative md:-mx-5">
                  <Card
                    featuredCard
                    linkTo={item.url}
                    image={item.image}
                    title={item.pageTitle}
                    subTitle={item.label}
                    description={truncateString(item.introductionText, 200)}
                  />
                </div>
              ) : (
                <div className="relative">
                  <FeaturedCard
                    secondary={index === 1 || index === 9}
                    width={index === 0 || index === 8 ? 728 : 472}
                    linkTo={item.url}
                    image={item.image}
                    title={item.pageTitle}
                    subTitle={item.label}
                    description={truncateString(item.introductionText, 200)}
                  />
                </div>
              )}
            </div>
          </div>
        )
      } else {
        items.push(
          <div
            data-testid="variant-test"
            key={index}
            className={clsx(
              'col-span-5 relative lg:col-span-3 md:col-span-4 whitespace-normal first:md:col-span-3 first:md:col-start-1 pb-5 md:pb-8 last:border-none last:pb-0 md:px-0 px-5'
            )}
          >
            <div
              className={clsx(
                'col-span-5 relative md:col-span-3 pb-5 md:pb-0',
                index === 0 && 'md:col-span-3 md:col-start-1',
                'border-b border-gray-light md:border-none'
              )}
            >
              <div className="md:ml-5 relative">
                <Card
                  showArrow={false}
                  linkTo={item.url}
                  image={item.image}
                  title={item.pageTitle}
                  subTitle={item.label}
                />
              </div>
            </div>
          </div>
        )
      }
    })
    setListingItems(items)

    if (items.length > 0) {
      setIsLoading(false)
    }
  }

  const resetLabel = data.resetLabel || 'Reset'
  const locationLabel = data.locationsLabel || 'Location'
  const serviceLabel = data.servicesLabel || 'Service'
  const sectorLabel = data.sectorsLabel || 'Sector'
  const refreshButtonText = data.refreshButtonText || 'Reset filters'

  const createFilters = (data: any) => {
    const locationsFilter = generateFilter(
      data,
      locationLabel,
      'location',
      'locations'
    )
    const sectorsFilter = generateFilter(data, sectorLabel, 'sector', 'sectors')
    const serviceFilter = generateFilter(
      data,
      serviceLabel,
      'service',
      'services'
    )
    setFilters([
      { ...sectorsFilter },
      { ...serviceFilter },
      { ...locationsFilter },
    ])
  }

  const isInFilter = (haystack: any, needle: string) => {
    if (!needle) return true
    const filtered = haystack.filter(
      (item: { pageTitle: string }) => item?.pageTitle?.trim() === needle
    )
    return !!filtered.length
  }

  const filterResults = (results: any) => {
    let newFilteredResults: any = []
    let toFilter = results
    const filterTypes = ['sector', 'service', 'location']
    filterTypes.map((filterType: string) => {
      toFilter?.map((page: { [x: string]: any[] }) => {
        if (
          isInFilter(page[filterType + 's'], router.query[filterType] as string)
        ) {
          newFilteredResults.push(page)
        }
      })
      toFilter = newFilteredResults
      newFilteredResults = []
    })

    if (toFilter.length === 0) {
      setNoResults(true)
    } else {
      setNoResults(false)
    }

    generateList(toFilter)
  }

  useEffect(() => {
    handleData(data.projects)
  }, [data])

  useEffect(() => {
    filterResults(results)
    setInitialLoad(false)
  }, [router.query, results])

  const threeColumnGrid: Grid[] = [
    {
      align: 'right',
      desktopStartColumn: !noResults ? 1 : undefined,
      alignMobile: 'right',
    },
    {
      align: 'middle',
      desktopStartColumn: 4,
      alignMobile: 'right',
    },
    {
      align: 'middle',
      alignMobile: 'right',
      desktopStartColumn: 7,
    },
  ]

  function handleReset() {
    router.replace(transformUrl(data.url), undefined, {
      shallow: true,
    })
  }

  const currentPage = (router.query.page as string) || 0

  useEffect(() => {
    if (currentPage) {
      if (parseInt(currentPage) > 1) {
        setIsFirstPage(false)
      } else {
        setIsFirstPage(true)
      }
    }
  }, [currentPage])

  return (
    <div className="min-h-screen flex flex-col">
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

      <div className="container">
        <FiltersHeader
          customGrids={noResults ? threeColumnGrid : undefined}
          breadcrumbs={[{ text: data.pageTitle }]}
          title={data.pageTitle}
          level={3}
          endGridLine={!noResults}
          filters={
            <Filters resetLabel={resetLabel} url={data.url} filters={filters} />
          }
          threeColumnLayout
        />
      </div>

      {isLoading ? (
        <div className="flex-1 flex items-center justify-center border-t border-gray-light">
          <Spinner height={200} width={200} />
        </div>
      ) : (
        <>
          <div className="flex-1 flex-col">
            {noResults && (
              <div className="relative h-full container">
                <GridLines grids={threeColumnGrid} />
                <div className="grid grid-cols-5 gap-x-5 md:grid-cols-10 md:gap-x-10 relative h-full items-center">
                  <div className="col-span-4">
                    {!!data.noResultsText && (
                      <span className="body1">{data.noResultsText}</span>
                    )}
                    <div className="mt-5">
                      <Button
                        onClick={() => handleReset()}
                        type="primary"
                        buttonText={refreshButtonText}
                        backgroundColour="bg-super-lime"
                        hoverColour="bg-midnight-blue"
                        textColour="text-midnight-blue"
                        textHoverColour="group-hover:text-super-lime"
                        icon={<RefreshIcon width={16} height={16} />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className={clsx(noResults && 'hidden')}>
              {initialLoad ? (
                <>
                  {listingItems?.length > 0 && (
                    <Pagination
                      projectPagination
                      items={listingItems}
                      itemsPerPage={isFirstPage ? 13 : 15}
                      threeColumnLayout
                    />
                  )}
                </>
              ) : (
                <>
                  {listingItems?.length > 0 && (
                    <Pagination
                      projectPagination
                      items={listingItems}
                      itemsPerPage={isFirstPage ? 13 : 15}
                      threeColumnLayout
                    />
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}

      {data.footer && <Footer {...data.footer} />}
    </div>
  )
}
