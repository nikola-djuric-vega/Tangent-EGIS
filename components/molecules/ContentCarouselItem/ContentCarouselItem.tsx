import React, { useEffect, useRef } from 'react'
import useMobile from '../../../utils/useMobile'
import TagLine from '../../atoms/TagLine/TagLine'
import Card from '../Card/Card'

export interface ContentCarouselItemProps {
  title?: string
  image: { url: string; umbracoAlternateText: string }
  readLength?: string
  tagType?: string
  description?: string
  hideDetails?: boolean
  linkTo?: string
  setImageHeight?(value: number): void
  tabIndex?: number
}

export default function ContentCarouselItem({
  title,
  image,
  readLength,
  tagType,
  description,
  hideDetails,
  linkTo,
  setImageHeight,
  tabIndex,
}: ContentCarouselItemProps) {
  const isMobile = useMobile()

  return (
    <Card
      tabIndex={tabIndex}
      setImageHeight={setImageHeight}
      showArrow={!isMobile}
      contentCarouselItem
      hideDetails={hideDetails}
      image={image}
      linkTo={linkTo}
      tagline={
        readLength && (
          <TagLine time={+readLength} additionalInfo={tagType} removeMargin />
        )
      }
      subTitle={title}
      description={description}
    />
  )
}
