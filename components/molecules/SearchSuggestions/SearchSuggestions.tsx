import React from 'react'
import Link from 'next/link'
import { transformUrl } from '../../../utils/helpers'
import { useRouter } from 'next/router'

interface Props {
  searchSuggestions: string[]
  suggestionLabel: string
  setIsOverlayOpen(visible: boolean): void
}

export default function SearchSuggestions({
  searchSuggestions,
  suggestionLabel,
  setIsOverlayOpen,
}: Props) {
  const router = useRouter()
  return (
    <>
      {!!searchSuggestions.length && (
        <div className="flex flex-col">
          <div className="h6 text-white">{suggestionLabel}:</div>
          <div className="flex flex-col mt-2">
            {!!searchSuggestions &&
              searchSuggestions.map((suggestion, index) => {
                const linkTo =
                  router.locale === 'en'
                    ? '/search-results?search=' + encodeURIComponent(suggestion)
                    : '/resultats-de-recherche?chercher=' +
                      encodeURIComponent(suggestion)

                return (
                  <Link
                    href={transformUrl(linkTo)}
                    key={`search_suggestion_${index}`}
                  >
                    <div
                      onClick={() => setIsOverlayOpen(false)}
                      className="inline-block"
                    >
                      <span className="font-serif leading-7 text-steel-gray text-xl cursor-pointer">
                        {suggestion}
                      </span>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      )}
    </>
  )
}
