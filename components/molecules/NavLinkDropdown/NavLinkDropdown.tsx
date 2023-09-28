import React, { useEffect, useState } from 'react'
import { theme } from '../../../tailwind.config'
import { motion } from 'framer-motion'
import debounce from 'lodash/debounce'
import clsx from 'clsx'
import Link from 'next/link'
import { checkLocale, transformUrl } from '../../../utils/helpers'

interface NavLinkDropdownProps {
  title?: string
  introduction?: string
  columns?: {
    title?: string
    extraSpacing?: boolean
    pages: { name: string; url: string }[]
  }[]
  open?: boolean
  leaveFocus?: any
  siteLocale?: string
  defaultLocale?: string
  handleLocaleClick?: (locale: string) => void
  url_en?: string
  url_fr?: string
  url_es?: string
  url_pt?: string
}

const NavLinkDropdown = ({
  title,
  introduction,
  columns,
  open = false,
  leaveFocus,
  siteLocale,
  defaultLocale,
  handleLocaleClick,
  url_en,
  url_fr,
  url_es,
  url_pt,
}: NavLinkDropdownProps) => {
  const [isDesktop, setIsDesktop] = useState(false)
  const updateMedia = debounce(() => {
    setIsDesktop(
      window.innerWidth > parseInt(theme.screens['lg'].replace('px', ''))
    )
  }, 100)
  const handleBlur = (e: any) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      leaveFocus()
    }
  }
  useEffect(() => {
    updateMedia()
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  }, [])
  const variants = {
    open: isDesktop
      ? { x: 0, opacity: 1, display: 'block' }
      : { x: 0, display: 'block' },
    close: isDesktop
      ? { x: 0, opacity: 0, transitionEnd: { display: 'none' } }
      : { x: '100%', transitionEnd: { display: 'none' } },
  }
  return (
    <div className="w-full overflow-hidden absolute top-0 xl:top-70px left-0 z-50">
      <motion.div
        className="w-full min-h-nav xl:min-h-0 bg-white"
        role="menu"
        onBlur={handleBlur}
        variants={variants}
        initial={false}
        animate={open ? 'open' : 'close'}
        transition={{
          duration: 0.3,
        }}
      >
        <div className="container border-l border-gray-light min-h-nav pb-8 xl:min-h-0 xl:border-l-0 xl:pb-0">
          <div className="flex flex-wrap pl-4 xl:pl-0">
            <div className="hidden xl:block xl:w-2/5">
              <div className="w-3/4 py-14">
                {title && (
                  <span role="heading" aria-level={6} className="h6 mb-3">
                    {title}
                  </span>
                )}
                {introduction && <p className="body3">{introduction}</p>}
              </div>
            </div>
            {columns &&
              columns.map((col, colIndex) => {
                const rightBorder =
                  columns.length < 3 && columns.length === colIndex + 1
                return (
                  <div
                    className={clsx(
                      'w-full border-gray-light xl:border-l xl:w-1/5 xl:py-14 xl:pr-4 xl:last:pr-0',
                      rightBorder && 'xl:border-r'
                    )}
                    key={colIndex}
                  >
                    {col.title && (
                      <span
                        className="tag mb-4 xl:mb-5 pt-8 xl:pt-0"
                        role="heading"
                        aria-level={7}
                      >
                        {col.title}
                      </span>
                    )}
                    {col.pages?.length > 0 && handleLocaleClick
                      ? col.pages
                          ?.filter((link) => eval('url_' + link.url) !== null)
                          ?.map((link, linkIndex) => {
                            return (
                              <Link
                                href={transformUrl(eval('url_' + link.url))}
                                as={transformUrl(eval('url_' + link.url))}
                                key={link.name}
                                locale={link.url}
                              >
                                <a
                                  onClick={() => {
                                    handleLocaleClick!(link.url)
                                  }}
                                  href={link.url}
                                  className={clsx(
                                    'block text-sm leading-5 xl:py-0 border-gray-light first:border-t-0 border-b xl:last:border-b-0 relative pl-3',
                                    (linkIndex !== 0 || col.title) &&
                                      'xl:border-t-0',
                                    linkIndex !== 0 && 'xl:mt-6',
                                    siteLocale === link.url && 'pl-0'
                                  )}
                                  role="menuitem"
                                >
                                  <div
                                    className={clsx(
                                      'relative py-5 transition duration-400 ease-in decoration-transparent hover:underline hover:underline-offset-4 hover:ease-in hover:decoration-midnight-blue',
                                      siteLocale === link.url &&
                                        'bg-gray-lightest border-l-3 border-l-midnight-blue border-b-0 border-t-0 my-3 pl-3 !py-4'
                                    )}
                                  >
                                    {link.name}
                                  </div>
                                </a>
                              </Link>
                            )
                          })
                      : col.pages?.length > 0
                      ? col.pages.map((link, linkIndex) => {
                          return (
                            <Link
                              passHref
                              href={transformUrl(link.url)}
                              key={linkIndex}
                              locale={checkLocale(siteLocale, defaultLocale)}
                            >
                              <a
                                onClick={() => leaveFocus()}
                                href={link.url}
                                className={clsx(
                                  'block text-sm leading-5 py-5 xl:py-0 border-gray-light last:border-b xl:last:border-b-0 relative group',
                                  (linkIndex !== 0 || col.title) &&
                                    'border-t xl:border-t-0',
                                  linkIndex !== 0 && 'xl:mt-6',
                                  col.extraSpacing &&
                                    col.pages.length - 2 === linkIndex &&
                                    'border-b xl:border-b-0',
                                  col.extraSpacing && 'last:mt-14 xl:last:mt-12'
                                )}
                                role="menuitem"
                              >
                                <div className="relative inline-block">
                                  {link.name}

                                  <div className="left-0 absolute bottom-0 translate-y-1 bg-midnight-blue h-px w-full group-hover:translate-y-0 transition transform duration-400 ease-in-out opacity-0 group-hover:opacity-100"></div>
                                </div>
                              </a>
                            </Link>
                          )
                        })
                      : null}
                  </div>
                )
              })}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default NavLinkDropdown
