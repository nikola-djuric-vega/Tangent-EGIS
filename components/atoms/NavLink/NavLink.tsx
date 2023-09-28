import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import NavLinkDropdown from '../../molecules/NavLinkDropdown/NavLinkDropdown'
import { checkLocale, transformUrl } from '../../../utils/helpers'
import ArrowIcon from '../icons/Arrow/ArrowIcon'

interface NavLinkProps {
  text: string
  url?: string
  dropdown?: { title?: string; introduction?: string; columns?: any }
  light?: boolean
  active?: boolean
  bold?: boolean
  onDropdown?: any
  onLeaveFocus?: any
  siteLocale?: string
  defaultLocale?: string
}

const NavLink = ({
  text,
  url = '',
  dropdown,
  light = false,
  active = false,
  bold = false,
  onDropdown,
  onLeaveFocus,
  siteLocale,
  defaultLocale,
}: NavLinkProps) => {
  const classList = clsx(
    'w-full h-full flex justify-between xl:justify-start flex-column items-center text-sm leading-5 py-5 border-b border-gray-light xl:w-auto xl:border-b-0 xl:py-0 xl:ml-11 2xl:ml-16 xl:first:ml-0 xl:hover:active-line',
    light ? 'text-white' : 'text-black',
    active && 'xl:active-line',
    bold && 'font-bold',
    dropdown && 'cursor-pointer'
  )
  return (
    <>
      {dropdown?.columns?.length === 0 ? (
        <Link
          href={transformUrl(url)}
          locale={checkLocale(siteLocale, defaultLocale)}
        >
          <a className={classList}>{text}</a>
        </Link>
      ) : (
        <>
          <button
            className={classList}
            onClick={onDropdown}
            aria-haspopup="true"
            aria-expanded={active}
          >
            {text}
            <span className="xl:hidden mr-5 md:mr-0">
              <ArrowIcon rightArrow width={13} height={10} />
            </span>
          </button>

          <NavLinkDropdown
            title={dropdown?.title}
            introduction={dropdown?.introduction}
            columns={dropdown?.columns}
            open={active}
            leaveFocus={onLeaveFocus}
            siteLocale={siteLocale}
            defaultLocale={defaultLocale}
          />
        </>
      )}
    </>
  )
}

export default NavLink
