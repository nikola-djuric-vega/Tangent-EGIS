import React, { useEffect, useState } from 'react'
import { SearchResultsPage as SearchResultsType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import TopNav from '../../components/organisms/TopNav/TopNav'
import Footer from '../../components/organisms/Footer/Footer'
import axios from 'axios'
import SearchResults, {
  Result,
} from '../../components/organisms/SearchResults/SearchResults'
import { useRouter } from 'next/router'
import { getContentTypeTag } from '../../utils/helpers'
import Spinner from '../../components/atoms/Spinner/Spinner'
import { omit } from 'lodash'

interface SearchResultsProps {
  data: SearchResultsType
}

export const SearchResultsPage = ({ data }: SearchResultsProps) => {
  const [initialResults, setInitialResults] = useState<Result[] | undefined>(
    undefined
  )
  const [filteredResults, setFilteredResults] = useState<Result[] | undefined>(
    undefined
  )
  const [filters, setFilters] = useState<any | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const router = useRouter()

  const getSearchResults = async (searchTerm: string) => {
    setIsLoading(true)

    try {
      return await axios
        .get(`${process.env.NEXT_PUBLIC_SEARCH_URL}&search=${searchTerm}`)
        .then(({ data }) => filterResults(data as Result[]))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getSearchResults(
      router.locale === 'en'
        ? (router?.query.search as string)
        : (router?.query.chercher as string)
    )
  }, [router?.query.search, router?.query.chercher, router?.query.type])

  useEffect(() => {
    let title = ''
    if (router.query.type) {
      title = `${router.query.type} (${filteredResults?.length})`
    } else {
      title = `${data.allLabel} (${initialResults?.length})`
    }

    let updatedFilters = filters?.map((o: {}, i: number) => {
      if (i === 0) {
        return {
          ...o,
          title,
        }
      }
    })

    setFilters(updatedFilters)
  }, [filteredResults, initialResults])

  useEffect(() => {
    setFilters(getFilters())
  }, [initialResults])

  const filterResults = (results: Result[]) => {
    setInitialResults(results)

    let filteredResults = results
    if (router.query.type && router.query.type.length > 0)
      filteredResults = filteredResults?.filter(
        (result) =>
          result.contentTypeAlias &&
          getContentTypeTag(result.contentTypeAlias) ===
            (router.query.type as string)
      )

    setFilteredResults(filteredResults)
    setIsLoading(false)
  }

  const getFilters = () => {
    let index = 0
    index++

    let filters = initialResults?.map((result) => result.contentTypeAlias)
    let options: { label: string; value: string }[] = []
    filters = Array.from(new Set(filters))
    filters &&
      filters.map((filter) => {
        if (
          filter === 'newsDetailPage' ||
          filter === 'insightPage' ||
          filter === 'projectPage' ||
          filter === 'sectorPage' ||
          filter === 'servicesPage'
        ) {
          options.push({ label: getContentTypeTag(filter), value: filter })
        }
      })
    return [
      {
        title: '',
        optionGroups: [{ options: options }],
        type: 'type',
      },
    ]
  }

  const { query, asPath } = useRouter()

  const searchParam = omit(query, ['slug', 'type'])

  const path = asPath.split('?')[0]

  const url =
    path +
    (router.locale === 'en'
      ? '?search=' +
        encodeURIComponent(searchParam[Object.keys(searchParam)[0]] as string)
      : '?chercher=' +
        encodeURIComponent(searchParam[Object.keys(searchParam)[0]] as string))

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

      {isLoading ? (
        <div className="flex-1 flex items-center justify-center border-t border-gray-light">
          <Spinner height={200} width={200} />
        </div>
      ) : (
        <div className="flex-1">
          <SearchResults
            url={url}
            breadcrumbs={[{ text: data.pageTitle }]}
            search={encodeURIComponent(
              router.locale === 'en'
                ? (router?.query.search as string)
                : (router?.query.chercher as string)
            )}
            results={filteredResults}
            hideFeatured={parseInt(router?.query.page as string) > 1}
            filters={filters}
            isFiltered={!!router?.query.type}
          />
        </div>
      )}

      {data.footer && <Footer {...data.footer} />}
    </div>
  )
}
