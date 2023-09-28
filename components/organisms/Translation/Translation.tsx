import React, { useState, useEffect, useRef } from 'react'
import Button from '../../atoms/Button/Button'
import CloseIcon from '../../atoms/icons/Close/CloseIcon'
import useMobile from '../../../utils/useMobile'
import clsx from 'clsx'
import TranslationGlobe from '../../atoms/icons/TranslationGlobe/TranslationGlobe'
import { pageTranslation } from '../../../mappings/pageTranslation'
import Link from 'next/link'
import { checkLocale, transformUrl } from '../../../utils/helpers'
import { useOnClickOutside } from '../../../utils/useOnClickOutside'
import { Translations } from '../../../mappings/pageTranslation'
import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { debounce } from 'lodash'

const Translation = ({ data }: any) => {
  const translationLanguagetoShow = 'de'
  const router = useRouter()
  const { locale: siteLocale, defaultLocale } = router || {
    locale: 'en',
    defaultLocale: 'en',
  }
  const [textIndex, setTextIndex] = useState<number>(0)
  const [showLanguageSwitcher, setShowLanguageSwitcher] =
    useState<boolean>(true)
  const [isSwitchingActive, setIsSwitchingActive] = useState<boolean>(true)
  const [languageList, setLanguageList] = useState<boolean>(false)
  const [displayLanguages, setDisplayLanguages] = useState<boolean>(false)

  const domNode = useOnClickOutside(() => {
    if (languageList) {
      if (isMobile) {
        setIsSwitchingActive(true)
      }
      setShowLanguageSwitcher(false)
      setLanguageList(false)
      isMobile ? setDisplayLanguages(true) : setDisplayLanguages(false)
    }
  })

  const sortLanguages = (languages: Translations[], type: string) => {
    return languages.sort((a: any, b: any) => a[type].localeCompare(b[type]))
  }

  const getLanguages = () => {
    let availableLanguages: Translations[] = []

    if (data) {
      Object.keys(data).forEach(function (key) {
        if (key.includes('url_')) {
          availableLanguages.push({
            flag: key.slice(4),
            url: data[key],
          })
        }
      })
    }

    const availableLanguagesSorted = sortLanguages(availableLanguages, 'flag')
    const results = pageTranslation.filter(({ flag: id1 }) =>
      availableLanguagesSorted.some(({ flag: id2 }, i) => {
        const pageTranslationSorted = sortLanguages(pageTranslation, 'flag')

        if (
          id2 === id1 &&
          !!availableLanguages[i].url &&
          pageTranslationSorted[i].flag === availableLanguagesSorted[i].flag
        ) {
          pageTranslationSorted[i].url = availableLanguagesSorted[i].url
        } else {
          return
        }
        return id2 === id1
      })
    )

    return sortLanguages(results, 'language')
  }

  const availableLanguages = getLanguages()
  const isMobile = useMobile()

  const checkCurrentLanguage = () => {
    const chosenLocale: string | undefined = translationLanguagetoShow
    let chosenLanguage: Translations = {}
    let availableLanguageFirst = availableLanguages.filter((item) => {
      if (item.flag === chosenLocale) {
        chosenLanguage = item
      }
      return
    })
    availableLanguageFirst.unshift(chosenLanguage)
    return availableLanguageFirst
  }

  const currentLanguages = checkCurrentLanguage()

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

  const debounceAnimation = debounce(() => {
    setIsSwitchingActive(false)
  }, 1000)

  useEffect(() => {
    const timer = () => {
      setTextIndex((prevIndex) => {
        if (prevIndex === currentLanguages?.length - 1) {
          if (isMobile) {
            return 0
          } else {
            setShowLanguageSwitcher(false)
            clearInterval(switchInterval)
            debounceAnimation()
          }
        }
        return prevIndex + 1
      })
    }

    const switchInterval = setInterval(timer, 5000)

    return () => {
      clearInterval(switchInterval)
    }
  }, [isMobile, textIndex])

  let textSwitchElement: HTMLSpanElement | null
  if (typeof window !== 'undefined') {
    textSwitchElement = document?.getElementById('textIndex')
  }

  useEffect(() => {
    setTimeout(() => {
      textSwitchElement?.classList.remove('translationText')
    }, 2500)

    if (showLanguageSwitcher) {
      if (textSwitchElement?.classList.contains('translationText')) {
        return
      } else {
        textSwitchElement?.classList.add('translationText')
      }
    }
  }, [textIndex, showLanguageSwitcher])

  useEffect(() => {
    setTextIndex(0)
    setIsSwitchingActive(true)
    setShowLanguageSwitcher(true)
    setLanguageList(false)
    isMobile ? setDisplayLanguages(true) : setDisplayLanguages(false)
  }, [router.asPath])

  return (
    <section
      className={clsx(
        'relative top-0 right-0 ml-3 mr-3 mt-1 mb-5 md:mb-0 md:mr-0 md:fixed md:bottom-0 md:top-auto z-20',
        (displayLanguages || showLanguageSwitcher) &&
          isMobile &&
          'shadow-blackShadowMobile'
      )}
      ref={domNode}
    >
      {availableLanguages?.find(
        ({ flag }) => flag === translationLanguagetoShow
      ) && (
        <div className={clsx('flex relative')}>
          <div
            className={clsx(
              !isMobile && 'translationBox shadow-blackShadow',
              !isSwitchingActive && 'hidden',
              !showLanguageSwitcher && 'inactive'
            )}
          >
            <button
              onClick={() => {
                setIsSwitchingActive(false)
                setShowLanguageSwitcher(false)
                setLanguageList(true)
                setDisplayLanguages(true)
              }}
            >
              <div
                className={clsx(
                  'h-14 w-50 md:w-80 bg-white flex justify-center items-center pr-0 pl-4 lg:pr-5',
                  !isSwitchingActive && 'hidden'
                )}
              >
                <span className="'font-family font-semibold" id="textIndex">
                  {currentLanguages[textIndex]?.translation}
                </span>
              </div>
            </button>
          </div>
          {languageList ? (
            <section
              className={clsx(
                isMobile &&
                  'flex flex-col-reverse flex-1 shadow-blackShadowMobile',
                !isMobile && 'shadow-blackShadow'
              )}
            >
              {displayLanguages && (
                <div className="bg-white">
                  <ul className="pb-2 pt-2 pl-4">
                    {availableLanguages
                      ?.filter(({ flag }) => flag === translationLanguagetoShow)
                      ?.map((item: any, i: number) => {
                        return (
                          <Link
                            href={transformUrl(item.url)}
                            as={transformUrl(item.url)}
                            locale={item.flag}
                            key={item.flag}
                          >
                            <a
                              onClick={() =>
                                handleLocaleClick(
                                  checkLocale(
                                    item.flag,
                                    defaultLocale
                                  ) as string
                                )
                              }
                            >
                              <li
                                key={i}
                                className={clsx(
                                  'align-center mb-0 pb-3 pl-4 pt-3 mr-3 hover:cursor-pointer hover:underline hover:underline-offset-2',
                                  siteLocale === item.flag &&
                                    'bg-gray-lightest border-l-4 pl-3'
                                )}
                              >
                                {item.language}
                              </li>
                            </a>
                          </Link>
                        )
                      })}
                  </ul>
                </div>
              )}
              <div className="relative h-14 w-full md:w-96 bg-super-lime">
                <button
                  className="pt-4 pl-8 pb-5 pr-10 font-family font-semibold"
                  onClick={() => setDisplayLanguages((prevState) => !prevState)}
                >
                  {currentLanguages && currentLanguages[0]?.select}
                </button>
                <div className="absolute top-2 right-1">
                  <Button
                    type="primary"
                    backgroundColour="bg-super-lime"
                    textColour="text-midnight-blue"
                    textHoverColour="group-hover:text-super-lime"
                    onClick={() => {
                      if (isMobile) {
                        setIsSwitchingActive(true)
                      }
                      setShowLanguageSwitcher(false)
                      setLanguageList(false)
                      setDisplayLanguages(true)
                    }}
                    icon={<CloseIcon colour="black" width={14} height={14} />}
                  />
                </div>
              </div>
            </section>
          ) : (
            <button
              onClick={() => {
                setIsSwitchingActive(false)
                setShowLanguageSwitcher(false)
                setLanguageList(true)
                setDisplayLanguages(true)
              }}
              className={clsx('ml-auto', !isMobile && 'shadow-blackShadow')}
            >
              <div className="relative h-14 w-12 md:h-14 md:w-24 bg-super-lime cursor-pointer flex items-center justify-center md:ml-0">
                <TranslationGlobe
                  height={isMobile ? 18 : 22}
                  width={isMobile ? 18 : 22}
                  color="black"
                />
              </div>
            </button>
          )}
        </div>
      )}
    </section>
  )
}

export default Translation
