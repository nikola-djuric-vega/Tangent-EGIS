import React from 'react'
import StylisedLink from '../StylisedLink/StylisedLink'
import ArrowIcon from '../icons/Arrow/ArrowIcon'
import Heading from '../Heading/Heading'
import { ConditionalWrapper, transformUrl } from '../../../utils/helpers'
import Link from 'next/link'

interface OfficeItem {
  city: string
  address: React.ReactNode[]
  url: string
  linkText: string | React.ReactNode
}

export default function OfficeItem({ office }: { office: OfficeItem }) {
  return (
    <ConditionalWrapper
      condition={!!office.url && !!office.linkText}
      wrapper={(children: any) => (
        <Link href={!!office.url ? transformUrl(office.url) : ''}>
          {children}
        </Link>
      )}
    >
      <div className="inline-flex flex-col justify-between space-y-1">
        <Heading level={6}>{office.city}</Heading>
        <div className="body4 flex flex-col">
          {office.address.map((address: React.ReactNode, idx: number) => (
            <span key={idx}>{address}</span>
          ))}
        </div>
        <div className="cta">
          {office.url && office.linkText && (
            <StylisedLink
              textColour="midnight-blue"
              textHoverColour="midnight-blue"
              type="tertiary"
              linkText={office.linkText}
              linkTo={office.url}
              icon={<ArrowIcon rightArrow width={16} height={16} />}
            />
          )}
        </div>
      </div>
    </ConditionalWrapper>
  )
}
