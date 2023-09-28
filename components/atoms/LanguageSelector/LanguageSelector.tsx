import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { transformUrl } from '../../../utils/helpers'
import ArrowIcon from '../icons/Arrow/ArrowIcon'
import NavLinkDropdown from '../../molecules/NavLinkDropdown/NavLinkDropdown'
import { useOnClickOutside } from '../../../utils/useOnClickOutside'
import ChevronIcon from '../icons/Chevron/ChevronIcon'
import TranslationGlobe from '../icons/TranslationGlobe/TranslationGlobe'

interface LanguageSelectorProps {
  light?: boolean
  url_en: string
  url_fr: string
  url_es?: string
  url_pt?: string
  isDesktop?: boolean
  bold?: boolean
  onLeaveFocus?: any
  onDropdown?: any
  active?: boolean
}

const LanguageSelector = ({
  light,
  url_en,
  url_fr,
  url_es,
  url_pt,
  isDesktop,
  bold = false,
  onLeaveFocus,
  onDropdown,
  active = true,
}: LanguageSelectorProps) => {
  const router = useRouter()
  const { locale: siteLocale, defaultLocale } = router || {
    locale: 'en',
    defaultLocale: 'en',
  }
  const [mobileButtonText, setMobileButtonText] = useState('')
  const [languageList, setLanguageList] = useState<boolean>(false)
  const dropdown = [
    {
      pages: [
        { name: 'English', url: 'en' },
        { name: 'French', url: 'fr' },
        { name: 'Español', url: 'es' },
        { name: 'Português', url: 'pt' },
      ],
    },
  ]

  const classList = clsx(
    'w-full h-full flex justify-between xl:justify-start flex-column items-center text-sm leading-5 py-5 border-b border-gray-light xl:w-auto xl:border-b-0 xl:py-0 xl:ml-11 2xl:ml-16 xl:first:ml-0 xl:hover:active-line',
    light ? 'text-white' : 'text-black',
    active && 'xl:active-line',
    bold && 'font-bold',
    dropdown && 'cursor-pointer'
  )

  const domNode = useOnClickOutside(() => {
    if (languageList) {
      setLanguageList(false)
    }
  })

  function handleLocaleClick(locale: string) {
    const cookies = parseCookies()

    if (typeof cookies.cookieResponse !== 'undefined') {
      const userChoice = JSON.parse(cookies.cookieResponse)

      if (userChoice) {
        setCookie(null, 'NEXT_LOCALE', locale, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        })
      }
    }
  }

  useEffect(() => {
    const checkCurrentLocale = dropdown[0].pages.filter(
      (locale) => locale.url === siteLocale
    )
    if (checkCurrentLocale[0]) {
      setMobileButtonText(checkCurrentLocale[0].name)
    }
  }, [siteLocale])

  return (
    <>
      {!isDesktop ? (
        <>
          <button
            className={classList}
            onClick={onDropdown}
            aria-haspopup="true"
            aria-expanded={active}
          >
            {mobileButtonText}
            <span className="xl:hidden mr-5 md:mr-0">
              <ArrowIcon rightArrow width={13} height={10} />
            </span>
          </button>

          <NavLinkDropdown
            columns={dropdown}
            open={active}
            leaveFocus={onLeaveFocus}
            handleLocaleClick={handleLocaleClick}
            url_en={url_en}
            url_fr={url_fr}
            url_es={url_es}
            url_pt={url_pt}
            siteLocale={siteLocale}
          />
        </>
      ) : (
        <section ref={domNode}>
          <button
            onClick={() => {
              setLanguageList(!languageList)
            }}
            className={clsx(
              '2xl:ml-16 ml xl:ml-11 cursor-pointer relative h-full flex items-center gap-1',
              light ? 'text-white' : 'text-black'
            )}
          >
            <TranslationGlobe color={light ? 'white' : 'black'} />
            {siteLocale === 'de'
              ? defaultLocale?.toLocaleUpperCase()
              : siteLocale?.toUpperCase()}
            <ChevronIcon
              color={light ? 'white' : 'black'}
              className={clsx({
                'transform rotate-0': !languageList,
                'transform rotate-180': languageList,
              })}
            />
            {languageList && (
              <div
                className={clsx(
                  'absolute right-0 top-3/4 bg-white h-fit w-36 cursor-default'
                )}
              >
                <ul className="p-2.5 text-left text-black">
                  {dropdown[0].pages
                    ?.filter((item) => eval('url_' + item.url) !== null)
                    ?.map((item: any, i: number) => {
                      return (
                        <Link
                          href={transformUrl(eval('url_' + item.url))}
                          as={transformUrl(eval('url_' + item.url))}
                          locale={item.url}
                          key={item.url}
                        >
                          <a onClick={() => handleLocaleClick(item.url)}>
                            <li
                              key={i}
                              className={clsx(
                                'mb-0 py-3 px-3 text-sm font-sans hover:cursor-pointer hover:underline hover:underline-offset-2',
                                siteLocale === item.url &&
                                  'bg-gray-lightest border-l-4 pl-3'
                              )}
                            >
                              {item.name}
                            </li>
                          </a>
                        </Link>
                      )
                    })}
                </ul>
              </div>
            )}
          </button>
        </section>
      )}
    </>
  )
}

export default LanguageSelector
