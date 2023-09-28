import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

interface SearchInputProps {
  dark?: boolean
  setSearch?(text: string): void
  setIsOverlayOpen?(visible: boolean): void
  searchOverlay?: boolean
  icon?: React.ReactNode
}

export default function SearchInput({
  dark,
  setSearch,
  setIsOverlayOpen,
  searchOverlay,
  icon,
}: SearchInputProps) {
  const router = useRouter()
  const [value, setValue] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (searchOverlay) {
      setValue('')
    } else {
      setValue(
        router.locale === 'en'
          ? (router?.query?.search as string)
          : (router?.query?.chercher as string)
      )
    }
  }, [
    router?.query?.search,
    router?.query?.chercher,
    searchOverlay,
    router.locale,
  ])

  const handleQuery = () => {
    const path = router.asPath.split('?')[0]
    const query = router.query
    delete query.slug
    delete query.type
    return { path, query }
  }

  const handleSearch = (searchTerm: string) => {
    const { path, query } = handleQuery()
    delete query.page
    query.search = searchTerm
    router.push(
      router.locale === 'en'
        ? '/search-results?search=' + searchTerm
        : '/resultats-de-recherche?chercher=' + searchTerm
    )
  }

  function handleCloseIcon() {
    setValue('')
  }

  return (
    <div
      className={clsx(
        'border-b-2 pb-2 md:pb-0 flex items-center',
        dark ? 'border-teal-blue' : 'border-gray'
      )}
    >
      <FormattedMessage
        id="qU8mZF"
        defaultMessage="Search here"
        description="Phrase for search here"
      >
        {(placeholder: any) => (
          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              if (setSearch) {
                setSearch(e.target.value)
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (setIsOverlayOpen && searchOverlay) {
                  setIsOverlayOpen(false)
                  handleSearch(e.currentTarget.value)
                }
              }
            }}
            data-testid="site-search-test"
            type="text"
            placeholder={placeholder}
            className={clsx(
              'h2 md:leading-extra-large appearance-none bg-transparent focus:outline-none overflow-visible caret-egis-green w-full mr-2 md:mr-5',
              dark ? 'text-white placeholder-steel-gray-darkest ' : 'text-black'
            )}
          />
        )}
      </FormattedMessage>
      {!!icon && (
        <button
          aria-label="close search overlay button"
          onClick={() => handleCloseIcon()}
        >
          {icon}
        </button>
      )}
    </div>
  )
}
