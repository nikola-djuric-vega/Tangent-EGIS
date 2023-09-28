import clsx from 'clsx'
import React from 'react'
import { theme } from '../../../tailwind.config'
import Heading from '../../atoms/Heading/Heading'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import SocialMediaIcon from '../../atoms/icons/SocialMedia/SocialMediaIcon'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'

interface Props {
  type: 'facebook' | 'twitter' | 'linkedin'
  title: string
  text: string
  linkTo: string
  buttonText: string
}

export default function SocialCTA({
  type,
  title,
  text,
  linkTo,
  buttonText,
}: Props) {
  return (
    <div className="h-full w-full bg-gray-lightest flex flex-col px-6 pt-8 pb-10 md:px-9 md:pt-14 md:pb-16 relative overflow-hidden">
      <div
        className={clsx('absolute', {
          'top-24 right-14': type === 'linkedin',
          'top-10 right-12': type === 'twitter',
          'top-24 right-4': type === 'facebook',
        })}
      >
        <SocialMediaIcon
          type={type}
          width={366}
          height={366}
          color={theme.colors.gray['light']}
        />
      </div>
      <div className="relative">
        <Heading level={4} hasGreenFlare>
          {title}
        </Heading>
        <div className="mt-3">
          <span className="body3">{text}</span>
        </div>
      </div>
      <div className="mt-20 relative">
        <StylisedLink
          textColour="text-midnight-blue"
          textHoverColour="group-hover:text-white"
          type="secondary"
          onlyBorder
          linkText={buttonText}
          linkTo={linkTo}
          icon={<ArrowIcon rightArrow width={16} height={20} />}
        />
      </div>
    </div>
  )
}
