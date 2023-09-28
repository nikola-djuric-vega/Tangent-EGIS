import React from 'react'
import ThreeColumnLayout, {
  InformationItem,
} from '../../molecules/ThreeColumnLayout/ThreeColumnLayout'
import clsx from 'clsx'
import { Link } from '../../../types/CMS'

interface RelatedContentProps {
  title?: string
  relatedItems: InformationItem[]
  viewAllLink?: { name: string; url: string }
  allInsightsCTA?: { name: string; url: string }
  allNewsCTA?: { name: string; url: string }
  blueBg?: boolean
  inlineCTA?: any
  featured?: boolean
  animation?: boolean
}

const RelatedContent = ({
  title,
  relatedItems,
  viewAllLink,
  blueBg,
  inlineCTA,
  featured = false,
  animation,
  allInsightsCTA,
  allNewsCTA,
}: RelatedContentProps) => {
  return (
    relatedItems && (
      <section
        className={clsx(
          'border-b border-gray-light',
          blueBg && 'bg-steel-gray-lightest'
        )}
        role="complementary"
      >
        <div className="container">
          <ThreeColumnLayout
            featured={featured}
            inlineCTA={inlineCTA}
            mobileView="stacked"
            title={title}
            itemType="cardItem"
            informationArray={relatedItems}
            linkText={viewAllLink?.name}
            linkTo={viewAllLink?.url}
            animation={animation}
            primaryCTA={allNewsCTA}
            secondaryCTA={allInsightsCTA}
          />
        </div>
      </section>
    )
  )
}

export default RelatedContent
