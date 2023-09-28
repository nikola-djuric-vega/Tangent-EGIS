import React, { useEffect, useRef, useState } from 'react'
import { theme } from '../../../tailwind.config'
import clsx from 'clsx'
import Link from 'next/link'
import debounce from 'lodash/debounce'
import EgisLogo from '../../atoms/EgisLogo/EgisLogo'
import NavLink from '../../atoms/NavLink/NavLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import SearchIcon from '../../atoms/icons/Search/SearchIcon'
import LanguageSelector from '../../atoms/LanguageSelector/LanguageSelector'
import { motion } from 'framer-motion'
import { NavigationItem } from '../../../types/CMS'
import { useRouter } from 'next/router'
import SearchOverlay from '../SearchOverlay/SearchOverlay'
import { checkLocale } from '../../../utils/helpers'
import { localeLables } from './TopNavLocaleLables'

interface TopNavProps {
  primaryLinks: NavigationItem[]
  secondaryLinks: NavigationItem[]
  url_en: string
  url_fr: string
  url_es?: string
  url_pt?: string
  pageTitle: string
  transparent?: boolean
}

const TopNav = ({
  primaryLinks,
  secondaryLinks,
  url_en,
  url_fr,
  url_es,
  url_pt,
  pageTitle,
  transparent = false,
}: TopNavProps) => {
  const router = useRouter()
  const [selected, setSelected] = useState('')
  const [burgerOpen, setBurgerOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const burgerButton = useRef<HTMLButtonElement>(null)
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false)
  const [languageLabels, setLanguageLabels] = useState(localeLables[0].label)
  const updateMedia = debounce(() => {
    setIsDesktop(
      window.innerWidth >= parseInt(theme.screens['xl'].replace('px', ''))
    )
  }, 100)
  useEffect(() => {
    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [updateMedia])
  useEffect(() => {
    setBurgerOpen(false)
    setSelected('')
  }, [isDesktop, router.asPath])
  useEffect(() => {
    document.querySelector('body')!.style.overflow =
      burgerOpen && !isDesktop ? 'hidden' : ''
  }, [burgerOpen, isDesktop])
  useEffect(() => {
    let currentLocale = localeLables.filter(
      (locale) => locale.language === router.locale
    )
    if (currentLocale[0]) {
      setLanguageLabels(currentLocale[0].label)
    }
  }, [router.locale])
  const toggleSelected = (selectedItem: string) => {
    setSelected(selected === selectedItem ? '' : selectedItem)
  }
  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen)
    setTimeout(() => setSelected(''), 500)
  }
  const focusHamburger = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget) && burgerOpen) {
      burgerButton?.current?.focus()
    }
  }
  const burgerVariants = {
    open: !isDesktop
      ? { x: 0, opacity: 1, display: 'block' }
      : { opacity: 1, display: 'flex' },
    close: !isDesktop
      ? { x: 0, opacity: 0, transitionEnd: { display: 'none' } }
      : { opacity: 1, display: 'flex' },
  }
  const backdropVariants = {
    open: isDesktop ? { x: 0, opacity: 0.3, display: 'block' } : {},
    close: isDesktop
      ? { x: 0, opacity: 0, transitionEnd: { display: 'none' } }
      : {},
  }

  const {
    locale: siteLocale,
    locales,
    defaultLocale,
  } = router || { locale: 'en', defaultLocale: 'en' }

  const onSearchClick = () => {
    setIsOverlayOpen(true)
  }

  return (
    <>
      <header
        className={clsx(
          'sticky top-0 h-16 duration-300 md:border-b border-transparent z-100',
          (burgerOpen || selected) && 'bg-white border-gray-light',
          !transparent && 'bg-white md:border-gray-light',
          (!transparent || burgerOpen) && 'border-b'
        )}
        style={{ height: '70px' }}
      >
        <nav className="container h-full flex flex-row items-center justify-between xl:justify-start xl:items-stretch">
          {selected && burgerOpen ? (
            <>
              <button onClick={() => setSelected('')}>
                <ArrowIcon
                  width={16}
                  height={16}
                  backgroundColor="super-lime"
                />
              </button>
              {selected && (
                <span className="h6" role="heading" aria-level={6}>
                  {selected}
                </span>
              )}
            </>
          ) : (
            <Link href="/" locale={checkLocale(siteLocale, defaultLocale)}>
              <a className="xl:pt-4 xl:pb-5 xl:mr-12 2xl:mr-14">
                <EgisLogo
                  markColor={theme.colors['egis-green']}
                  textColor={
                    transparent && !burgerOpen && !selected
                      ? theme.colors.white
                      : theme.colors.black
                  }
                />
              </a>
            </Link>
          )}
          <div className="flex flex-row items-center">
            {(siteLocale === 'en' || siteLocale === 'fr') && (
              <button
                className="mr-9 xl:hidden"
                aria-label="search this site"
                onClick={() => onSearchClick()}
              >
                <SearchIcon
                  width={22}
                  height={22}
                  colour={
                    transparent
                      ? theme.colors['white']
                      : theme.colors['midnight-blue']
                  }
                />
              </button>
            )}
            <button
              className={clsx(
                'tham tham-e-squeeze tham-w-6 xl:hidden',
                burgerOpen && 'tham-active'
              )}
              onClick={toggleBurger}
              ref={burgerButton}
              aria-label={burgerOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={burgerOpen}
            >
              <div className="tham-box">
                <div
                  className={clsx(
                    'tham-inner',
                    transparent && !burgerOpen && 'bg-white'
                  )}
                />
              </div>
            </button>
          </div>
          <motion.div
            className={clsx(
              'w-full absolute overflow-scroll md:overflow-hidden xl:overflow-visible top-70px left-0 bg-white dropdown-nav hidden xl:static xl:flex xl:items-center',
              transparent && !burgerOpen && 'xl:bg-transparent'
            )}
            variants={burgerVariants}
            initial={false}
            animate={burgerOpen ? 'open' : 'close'}
            transition={{
              duration: isDesktop ? 0 : 0.3,
            }}
          >
            <div className="container h-nav overflow-scroll border-l border-gray-light pl-4 pb-8 xl:min-h-full xl:h-full xl:overflow-visible xl:border-0 xl:pl-0 xl:pb-0 xl:static xl:flex xl:justify-between">
              <div className="xl:flex">
                {primaryLinks &&
                  primaryLinks.map((link, index) => {
                    return (
                      <NavLink
                        key={index}
                        text={link.navItemName?.name}
                        url={link.navItemName?.url}
                        dropdown={{
                          title: link.title,
                          introduction: link.text,
                          columns: link.groups,
                        }}
                        active={selected === link.navItemName?.name}
                        light={transparent && !burgerOpen && !selected}
                        bold
                        onDropdown={() =>
                          toggleSelected(link.navItemName?.name)
                        }
                        onLeaveFocus={() => setSelected('')}
                        siteLocale={siteLocale}
                        defaultLocale={defaultLocale}
                      />
                    )
                  })}
              </div>
              <div className="xl:flex border-t border-gray-light xl:border-t-0 mt-14 xl:mt-0">
                {secondaryLinks &&
                  secondaryLinks.map((link, index) => {
                    return (
                      <NavLink
                        key={index}
                        text={link.navItemName?.name}
                        url={link.navItemName?.url}
                        dropdown={{
                          title: link.title,
                          introduction: link.text,
                          columns: link.groups,
                        }}
                        active={selected === link.navItemName?.name}
                        light={transparent && !burgerOpen && !selected}
                        onDropdown={() =>
                          toggleSelected(link.navItemName?.name)
                        }
                        onLeaveFocus={() => setSelected('')}
                        siteLocale={siteLocale}
                        defaultLocale={defaultLocale}
                      />
                    )
                  })}

                <LanguageSelector
                  light={transparent && !burgerOpen && !selected}
                  url_en={url_en}
                  url_fr={url_fr}
                  url_es={url_es}
                  url_pt={url_pt}
                  isDesktop={isDesktop}
                  onLeaveFocus={() => setSelected('')}
                  onDropdown={() => toggleSelected(languageLabels)}
                  active={selected === languageLabels}
                  bold
                />

                <div className="hidden flex-row items-center ml-10 xl:flex">
                  <button
                    aria-label="search this site"
                    onClick={() => onSearchClick()}
                  >
                    <SearchIcon
                      width={23}
                      height={23}
                      colour={
                        transparent && !burgerOpen && !selected
                          ? theme.colors['white']
                          : theme.colors['midnight-blue']
                      }
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </nav>
      </header>
      <motion.div
        className="hidden fixed inset-0 w-full min-h-screen bg-black z-99"
        aria-hidden={selected === ''}
        aria-label="Close navigation"
        onClick={() => setSelected('')}
        variants={backdropVariants}
        initial={false}
        animate={selected ? 'open' : 'close'}
        transition={{
          duration: 0.3,
        }}
      />
      <SearchOverlay
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
        pageTitle={pageTitle}
      />
    </>
  )
}

export default TopNav
