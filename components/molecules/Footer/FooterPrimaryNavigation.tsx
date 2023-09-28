import React from 'react'
import { theme } from '../../../tailwind.config'
import EgisLogo from '../../atoms/EgisLogo/EgisLogo'
import Link from 'next/link'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import SocialMediaIcon from '../../atoms/icons/SocialMedia/SocialMediaIcon'
import { checkLocale, transformUrl } from '../../../utils/helpers'
import { useRouter } from 'next/router'

interface Props {
  subscribeText: string
  link: Link
  primaryNavigationLinks: Link[]
}

interface Link {
  url: string
  name: string
}

export default function FooterPrimaryNavigation({
  subscribeText,
  link,
  primaryNavigationLinks,
}: Props) {
  const router = useRouter()

  const { locale: siteLocale, defaultLocale } = router || {
    locale: 'en',
    defaultLocale: 'en',
  }
  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center md:py-12 pt-7">
      <div className="flex md:items-center justify-between">
        <div className="order-last md:order-first">
          <EgisLogo
            markColor={theme.colors['egis-green']}
            textColor={theme.colors['white']}
          />
        </div>
        <div className="md:ml-12 flex flex-col md:flex-row md:items-center md:space-x-6 space-y-5 md:space-y-0">
          {!!primaryNavigationLinks &&
            primaryNavigationLinks.map((item, index) => (
              <Link
                key={`footer_primary_navigation_item_${index}`}
                passHref
                href={transformUrl(item.url)}
                locale={checkLocale(siteLocale, defaultLocale)}
              >
                <a
                  href={transformUrl(item.url)}
                  className="text-sm font-sans font-bold leading-5 text-steel-gray-lightest"
                >
                  {item.name}
                </a>
              </Link>
            ))}
        </div>
      </div>
      <div className="border-t border-steel-gray-lightest border-opacity-13 w-screen md:w-auto -ml-10 md:ml-0 mt-7 md:border-transparent md:mt-0"></div>
      <div className="flex md:flex-row md:items-center flex-col md:mt-0 mt-6">
        {!!subscribeText && (
          <span className="cta text-steel-gray-lightest mr-8">
            {subscribeText}
          </span>
        )}
        {!!link && link.url && link.name && (
          <div className="md:mt-0 mt-4">
            <StylisedLink
              siteLocale={siteLocale}
              defaultLocale={defaultLocale}
              type="secondary"
              linkText={link.name}
              linkTo={transformUrl(link.url)}
              backgroundColour="bg-white"
              hoverColour="bg-white"
              textColour="text-black"
              textHoverColour="group-hover:text-black"
              icon={<SocialMediaIcon type="subscribe" width={16} height={12} />}
            />
          </div>
        )}
        <div className="border-t border-steel-gray-lightest border-opacity-13 w-screen md:w-auto -ml-10 md:ml-0 mt-7 md:border-transparent md:mt-0"></div>
      </div>
    </div>
  )
}
