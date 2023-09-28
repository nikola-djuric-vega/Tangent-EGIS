import clsx from 'clsx'
import React from 'react'
import Heading from '../../atoms/Heading/Heading'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'

interface Props {
  title: string
  text: string
  linkText: string
  linkTo: string
}

export default function InlineCTA({ title, text, linkText, linkTo }: Props) {
  return (
    <div className="flex flex-col bg-super-lime px-10 pt-14 pb-16">
      <Heading className="mb-3" level={4} hasWhiteDot>
        {title}
      </Heading>

      <span className="mb-6 body3">{text}</span>
      <div>
        <StylisedLink
          textColour="text-midnight-blue"
          textHoverColour="group-hover:text-white"
          onlyBorder
          type="secondary"
          linkText={linkText}
          linkTo={linkTo}
          icon={<ArrowIcon width={16} height={20} rightArrow />}
        />
      </div>
    </div>
  )
}
