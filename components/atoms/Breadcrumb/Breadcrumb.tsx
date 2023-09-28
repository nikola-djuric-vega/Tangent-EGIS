import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {
  checkLocale,
  transformUrl,
  truncateString,
} from '../../../utils/helpers'

export interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItemProps[]
}

export interface BreadcrumbItemProps {
  url?: string
  text?: string
}

const Breadcrumb = ({ breadcrumbs }: BreadcrumbsProps) => {
  const router = useRouter()

  const { locale: siteLocale, defaultLocale } = router || {
    locale: 'en',
    defaultLocale: 'en',
  }

  return (
    <div className="text-xs uppercase tracking-widest hidden md:flex items-center">
      {breadcrumbs.map((item: BreadcrumbItemProps, index: number) => {
        return breadcrumbs.length !== index + 1 && item.url ? (
          <React.Fragment key={index}>
            <Link
              href={transformUrl(item.url)}
              locale={checkLocale(siteLocale, defaultLocale)}
            >
              <a className="mr-4 font-bold">{!!item.text && item.text}</a>
            </Link>
            <span className="text-egis-green text-3xl mr-4"> &bull;</span>
          </React.Fragment>
        ) : (
          <span key={index}>
            {!!item.text && truncateString(item.text, 50)}
          </span>
        )
      })}
    </div>
  )
}

export default Breadcrumb
