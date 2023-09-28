import React from 'react'
import Link from 'next/link'
import SocialLinks from '../SocialLinks/SocialLinks'
import { checkLocale, transformUrl } from '../../../utils/helpers'
import { queryByTitle } from '@testing-library/react'
import { useRouter } from 'next/router'

interface Props {
  copyrightText: string
  secondaryFooterNavigation: { url: string; name: string }[]
  socialFollow: { label: string; to: string }[]
  socialFollowTitle: string
}

export default function FooterLegalLinks({
  copyrightText,
  secondaryFooterNavigation,
  socialFollow,
  socialFollowTitle,
}: Props) {
  const { query, locale: siteLocale, defaultLocale } = useRouter()
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between w-full pt-5 pb-10">
      <div className="flex flex-col md:flex-row md:items-center order-last md:order-first">
        <div className="border-t border-steel-gray-lightest border-opacity-13 w-screen md:w-auto -ml-10 md:ml-0 mt-7 md:border-transparent md:mt-0"></div>
        {!!copyrightText && (
          <span className="navLinkSecondary text-steel-gray-lightest mt-7 md:mt-0">
            {copyrightText} {query.showVersion === 'true' && <>| v1.3.1</>}
          </span>
        )}
        {!!secondaryFooterNavigation && (
          <div className="flex items-start md:ml-5 space-x-5 mt-5 md:mt-0">
            {secondaryFooterNavigation.map((item, index) => (
              <Link
                passHref
                href={transformUrl(item.url)}
                locale={checkLocale(siteLocale, defaultLocale)}
                key={`footer_secondary_navigation_item_${index}`}
              >
                <a
                  className="navLinkPrimary text-steel-gray-lightest"
                  href={item.url}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
      {!!socialFollow && (
        <div className="md:mr-9">
          <SocialLinks text={socialFollowTitle} socialLink={socialFollow} />
        </div>
      )}
    </div>
  )
}
