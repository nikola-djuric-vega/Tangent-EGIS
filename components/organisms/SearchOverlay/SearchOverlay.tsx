import React, { useEffect, useState } from 'react'
import { theme } from '../../../tailwind.config'
import EgisLogo from '../../atoms/EgisLogo/EgisLogo'
import CloseIcon from '../../atoms/icons/Close/CloseIcon'
import SearchInput from '../../atoms/SearchInput/SearchInput'
import SearchSuggestions from '../../molecules/SearchSuggestions/SearchSuggestions'
import useDebounce from '../../../utils/useDebounce'
import { Transition } from '@headlessui/react'
import {
  fetchPopular,
  fetchSuggested,
} from '../../../utils/fetchSearchSuggestions'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

interface Props {
  isOverlayOpen: boolean
  setIsOverlayOpen(visible: boolean): void
  pageTitle: string
}

export default function SearchOverlay({
  isOverlayOpen,
  setIsOverlayOpen,
  pageTitle,
}: Props) {
  const [search, setSearch] = useState<string>('')
  const [searchType, setSearchType] = useState<string>('Popular searches')
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([])

  const debouncedSearchTerm = useDebounce(search, 500)

  const { locale } = useRouter()

  useEffect(() => {
    async function fetchData() {
      if (debouncedSearchTerm.length >= 3) {
        const fetchEndpointUrl =
          process.env.NEXT_PUBLIC_SEARCH_SERVICE_ENDPOINT +
          '/indexes/' +
          process.env.NEXT_PUBLIC_SEARCH_INDEX_NAME +
          '/docs/suggest?search=' +
          search +
          '&suggesterName=' +
          process.env.NEXT_PUBLIC_SEARCH_SUGGESTER_NAME +
          '&api-version=' +
          process.env.NEXT_PUBLIC_SEARCH_API_VERSION +
          '&$select=' +
          (locale === 'en' ? 'PageTitle' : 'PageTitle_fr') +
          '&$top=3'

        const publicSearchApiKey =
          process.env.NEXT_PUBLIC_SEARCH_SUGGESTION_API_KEY!

        const suggested = await fetchSuggested(
          fetchEndpointUrl,
          publicSearchApiKey
        )
        if (suggested) {
          await setSearchSuggestions(suggested)
        }
      } else {
        const popular: string[] | undefined = await fetchPopular()
        if (popular) {
          await setSearchSuggestions(popular)
        }
      }
    }

    fetchData()
  }, [debouncedSearchTerm])

  useEffect(() => {
    if (search.length >= 3) {
      setSearchType(
        (
          <FormattedMessage
            description="Phrase for search suggestion"
            defaultMessage="Search suggestions"
          />
        ) as any
      )
    } else {
      setSearchType(
        (
          <FormattedMessage
            description="Phrase for popular searches"
            defaultMessage="Popular searches"
          />
        ) as any
      )
    }
  }, [search, locale, isOverlayOpen])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOverlayOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyDown(e))
    if (isOverlayOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      setTimeout(() => {
        setSearch('')
      }, 500)
      document.body.classList.remove('overflow-hidden')
    }
    return () => window.removeEventListener('keydown', (e) => handleKeyDown)
  }, [isOverlayOpen])

  const classes = {
    base: 'transition ease-in-out duration-300 transform',
  }
  return (
    <Transition show={isOverlayOpen}>
      <Transition.Child
        enter={classes.base}
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave={classes.base}
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="inset-0 fixed bg-midnight-blue h-screen w-screen flex flex-col z-100"
      >
        <div className="grid md:grid-cols-10 md:gap-x-10 gap-x-5 grid-cols-5 container mx-auto">
          <div className="col-start-1 col-span-full flex justify-between items-center py-5">
            <Link href="/" passHref>
              <a
                className="cursor-pointer"
                onClick={() => setIsOverlayOpen(false)}
              >
                <EgisLogo
                  markColor={theme.colors['egis-green']}
                  textColor={theme.colors['white']}
                />
              </a>
            </Link>
            <button
              aria-label="search button"
              onClick={() => setIsOverlayOpen(false)}
            >
              <CloseIcon colour={theme.colors['white']} />
            </button>
          </div>
          <div className="md:col-start-2 md:col-span-8 col-start-1 col-span-full mt-24 md:mt-32">
            <SearchInput
              searchOverlay
              dark
              setSearch={setSearch}
              setIsOverlayOpen={setIsOverlayOpen}
            />

            <div className="mt-9">
              <SearchSuggestions
                setIsOverlayOpen={setIsOverlayOpen}
                suggestionLabel={searchType}
                searchSuggestions={searchSuggestions}
              />
            </div>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  )
}
