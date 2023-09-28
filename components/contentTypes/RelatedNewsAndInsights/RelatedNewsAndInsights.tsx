import React from 'react'
import { InformationItem } from '../../molecules/ThreeColumnLayout/ThreeColumnLayout'
import RelatedContent from '../../organisms/RelatedContent/RelatedContent'
import TagLine from '../../atoms/TagLine/TagLine'
import { Media } from '../../../types/CMS'
import formatToMomentDate from '../../../utils/helpers'

interface RelatedNewsAndInsightsItem {
  name: string
  introductionText: string
  minutesRead: number
  label: string
  image: Media
  url: string
  __typename?: string
  endDate?: string
  startDate?: string
  webinarLabel?: string
}

interface RelatedNewsAndInsightsProps {
  title?: string
  relatedNewsAndInsights: RelatedNewsAndInsightsItem[]
  viewAllLink?: { name: string; url: string }
  blueBg?: boolean
  inlineCTA?: any
  animation?: boolean
  allInsightsCTA?: { name: string; url: string }
  allNewsCTA?: { name: string; url: string }
}

const RelatedNewsAndInsights = ({
  title,
  relatedNewsAndInsights,
  viewAllLink,
  blueBg,
  inlineCTA,
  allInsightsCTA,
  allNewsCTA,
  animation,
}: RelatedNewsAndInsightsProps) => {
  let newRelatedContentItems: InformationItem[] = []
  relatedNewsAndInsights &&
    relatedNewsAndInsights.map((item: RelatedNewsAndInsightsItem) => {
      const endDateValid = item.endDate !== '0001-01-01T00:00:00Z'
      newRelatedContentItems.push({
        subTitle: item.name,
        image: item.image,
        type: 'cardItem',
        linkTo: item.url,
        tagLine:
          item.__typename === 'EventDetailPage' ? (
            <TagLine
              date={`${
                endDateValid
                  ? formatToMomentDate(item.startDate!) +
                    ' - ' +
                    formatToMomentDate(item.endDate!)
                  : formatToMomentDate(item.startDate!)
              }`}
              additionalInfo={item.label || item.webinarLabel}
            />
          ) : (
            <TagLine time={item.minutesRead} additionalInfo={item.label} />
          ),
      })
    })
  return (
    newRelatedContentItems && (
      <RelatedContent
        allInsightsCTA={allInsightsCTA}
        allNewsCTA={allNewsCTA}
        inlineCTA={inlineCTA}
        title={title}
        relatedItems={newRelatedContentItems}
        blueBg={blueBg}
        viewAllLink={viewAllLink}
        animation={animation}
      />
    )
  )
}

export default RelatedNewsAndInsights
