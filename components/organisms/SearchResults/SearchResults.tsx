import React, { useEffect, useState } from 'react'
import SearchResult from '../../molecules/SearchResult/SearchResult'
import Heading from '../../atoms/Heading/Heading'
import SearchInput from '../../atoms/SearchInput/SearchInput'
import Pagination from '../Pagination/Pagination'
import {
  getContentTypeTag,
  getContentTypeTagFrench,
} from '../../../utils/helpers'
import Filters from '../../molecules/Filters/Filters'
import Breadcrumb, {
  BreadcrumbItemProps,
} from '../../atoms/Breadcrumb/Breadcrumb'
import CloseIcon from '../../atoms/icons/Close/CloseIcon'
import { theme } from '../../../tailwind.config'
import useMobile from '../../../utils/useMobile'
import { useRouter } from 'next/router'
import _ from 'lodash'
import { FormattedMessage } from 'react-intl'

interface SearchResultsProps {
  search?: string
  results?: Result[]
  hideFeatured?: boolean
  filters?: any
  isFiltered?: boolean
  breadcrumbs: BreadcrumbItemProps[]
  url: string
}

export interface Result {
  pageTitle: string
  seoDescription?: string
  path: string
  headerImageUrl?: string
  contentTypeAlias?: string
}

const SearchResults = ({
  search,
  results,
  hideFeatured,
  filters,
  isFiltered,
  breadcrumbs,
  url,
}: SearchResultsProps) => {
  const isMobile = useMobile()

  const [firstResult, setFirstResult] = useState<Result | undefined>(undefined)
  const [secondaryResultItems, setSecondaryResultItems] = useState<
    JSX.Element[] | undefined
  >(undefined)

  const router = useRouter()
  const { locale: siteLocale } = router || { locale: 'en' }

  useEffect(() => {
    const topResult = results?.filter((result) => {
      if (
        result.contentTypeAlias === 'servicePage' ||
        result.contentTypeAlias === 'countryPage' ||
        result.contentTypeAlias === 'sectorPage'
      ) {
        return result
      }
    })

    !isFiltered && topResult
      ? setFirstResult(topResult[0])
      : setFirstResult(undefined)
    let secondaryResults: JSX.Element[] = []
    !!search &&
      results?.map((result, index) => {
        secondaryResults.push(
          <SearchResult
            key={`result_${index}`}
            title={
              siteLocale !== 'en'
                ? eval('result.pageTitle_' + siteLocale)
                : result.pageTitle
            }
            content={
              siteLocale !== 'en'
                ? eval('result.' + _.camelCase('seoDescription-' + siteLocale))
                : result.seoDescription
            }
            linkTo={
              siteLocale !== 'en'
                ? eval('result.path_' + siteLocale)
                : result.path
            }
            image={result.headerImageUrl}
            tag={
              result.contentTypeAlias &&
              (siteLocale === 'en'
                ? getContentTypeTag(result.contentTypeAlias)
                : getContentTypeTagFrench(result.contentTypeAlias))
            }
            searchTerm={search}
          />
        )
      })
    setSecondaryResultItems(secondaryResults)
  }, [results])

  const { locale } = useRouter()
  const isEnglish = locale === 'en'

  return (
    <>
      <div className="z-10 relative container mt-5">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <div className="border-b border-gray-light pb-8 md:pb-10 md:pt-24">
        <div className="container">
          <SearchInput
            icon={
              <CloseIcon
                colour={theme.colors['midnight-blue']}
                width={isMobile ? 20 : 36}
                height={isMobile ? 20 : 36}
              />
            }
          />
        </div>
      </div>
      <div className="container">
        {!hideFeatured && firstResult && search && !isFiltered && (
          <>
            <Heading level={6} className="mt-8 md:mt-10" hasGreenFlare>
              <FormattedMessage
                description="Phrase for top page"
                defaultMessage="Top pages"
              />
            </Heading>
            <SearchResult
              title={
                siteLocale !== 'en'
                  ? eval('firstResult.pageTitle_' + siteLocale)
                  : firstResult.pageTitle
              }
              content={
                siteLocale !== 'en'
                  ? eval(
                      'firstResult.' +
                        _.camelCase('seoDescription-' + siteLocale)
                    )
                  : firstResult.seoDescription
              }
              linkTo={
                siteLocale !== 'en'
                  ? eval('firstResult.path_' + siteLocale)
                  : firstResult.path
              }
              image={firstResult.headerImageUrl}
              tag={
                firstResult.contentTypeAlias &&
                (siteLocale === 'en'
                  ? getContentTypeTag(firstResult.contentTypeAlias)
                  : getContentTypeTagFrench(firstResult.contentTypeAlias))
              }
              searchTerm={search}
              featured
            />
          </>
        )}
        {secondaryResultItems && secondaryResultItems?.length > 0 ? (
          <>
            <Pagination
              heading={
                <div className="md:flex md:justify-between mt-8 md:mt-10">
                  <Heading level={6} hasGreenFlare>
                    <FormattedMessage
                      description="Phrase for more results"
                      defaultMessage="More results"
                    />
                  </Heading>
                  <Filters url={url} filters={filters} />
                </div>
              }
              items={secondaryResultItems}
              itemsPerPage={7}
            />
          </>
        ) : (
          <div className="md:my-32 my-12 h-full w-full flex-1">
            <span className="body1">
              <FormattedMessage
                description="Phrase for no results on search"
                defaultMessage="Sorry, we couldn’t find any results for your search"
              />
            </span>
            <div className="body2 flex flex-col mt-12 space-x-5 ">
              {isEnglish ? (
                <>
                  <span className="text-2xl">Search suggestions:</span>
                  <div className="flex flex-col space-y-2 mt-3">
                    <span>
                      &#8226; Use fewer keywords to broaden your search
                    </span>
                    <span>&#8226; Check your spelling</span>
                  </div>
                </>
              ) : (
                <span>{`Désolé, nous n’avons pas trouvé votre page.`}</span>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default SearchResults
