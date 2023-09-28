import React from 'react'
import { Footer as FooterTypes } from '../../../types/CMS'
import FooterLegalLinks from '../../molecules/Footer/FooterLegalLinks'
import FooterPrimaryNavigation from '../../molecules/Footer/FooterPrimaryNavigation'

export default function Footer({
  copyrightText,
  primaryNavigationLinks,
  secondaryFooterNavigation,
  socialFollow,
  subscribeLink,
  subscribeText,
  socialFollowTitle,
}: FooterTypes) {
  const formatSocial = socialFollow?.map((social) => {
    return { ...social, label: social.socialPlatform, to: social.uRL }
  })

  return (
    <footer className="bg-midnight-blue relative">
      <div className="container border-l border-r border-transparent md:border-teal-blue px-5">
        <FooterPrimaryNavigation
          subscribeText={subscribeText}
          link={subscribeLink}
          primaryNavigationLinks={primaryNavigationLinks}
        />
      </div>

      <div className="border border-opacity-13 border-transparent md:border-teal-blue md:border-opacity-50 container"></div>

      {!!formatSocial && (
        <div className="container border-l border-r border-transparent md:border-teal-blue px-5">
          <FooterLegalLinks
            socialFollowTitle={socialFollowTitle}
            copyrightText={copyrightText}
            secondaryFooterNavigation={secondaryFooterNavigation}
            socialFollow={formatSocial}
          />
        </div>
      )}
    </footer>
  )
}
