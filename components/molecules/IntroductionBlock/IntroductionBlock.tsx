import React from 'react'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'

interface IntroductionBlockProps {
  introductionText?: string
  linktoUrl?: string
  linkText?: string
  secondaryNavigationTitle?: string
  subSectorLinks?: { name: string; url: string }[]
  children: React.ReactNode
}

const IntroductionBlock = ({
  introductionText,
  linktoUrl,
  linkText,
  secondaryNavigationTitle,
  subSectorLinks,
  children,
}: IntroductionBlockProps) => {
  return (
    <div className="relative z-20 pt-8 pb-5 md:max-w-screen-md md:pl-0 md:pt-0 md:pb-8">
      {introductionText && <p className="body2 md:pr-20">{introductionText}</p>}
      {linkText && linktoUrl && (
        <div className="pt-8 pb-8 md:pb-12">
          <StylisedLink
            type="secondary"
            linkText={linkText}
            linkTo={linktoUrl}
            backgroundColour="bg-super-lime"
            hoverColour="bg-midnight-blue"
            textColour="text-midnight-blue"
            textHoverColour="group-hover:text-super-lime"
            icon={<ArrowIcon rightArrow width={17} height={20} />}
          />
        </div>
      )}
      {secondaryNavigationTitle && (
        <div className="h6">{secondaryNavigationTitle}</div>
      )}
      {subSectorLinks && (
        <div className="pt-5 pb-8 md:pb-12 flex gap-2 flex-wrap">
          {subSectorLinks.map((link, index) => {
            return (
              <StylisedLink
                key={index}
                type="secondary"
                linkText={link.name}
                linkTo={link.url}
                textColour="text-midnight-blue"
                textHoverColour="group-hover:text-white"
                onlyBorder
                icon={<ArrowIcon rightArrow width={17} height={20} />}
              />
            )
          })}
        </div>
      )}
      {children}
    </div>
  )
}

export default IntroductionBlock
