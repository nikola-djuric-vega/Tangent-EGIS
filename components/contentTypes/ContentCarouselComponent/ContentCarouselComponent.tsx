import React from 'react'
import ContentCarousel from '../../organisms/ContentCarousel/ContentCarousel'
import { ContentCarouselItemProps } from '../../molecules/ContentCarouselItem/ContentCarouselItem'

const ContentCarouselComponent = (data: any) => {
  let items: ContentCarouselItemProps[] = []

  data.contentCarouselItems?.map((item: any) => {
    const itemName = !!item.label
      ? item.name + ` (` + item.label + `)`
      : item.name
    items.push({
      title: itemName,
      description: item.introductionText,
      image: item.image,
      linkTo: item.url,
    })
  })

  return (
    <ContentCarousel
      title={data.title}
      items={items}
      id="content-carousel"
      link={data.viewAllLink}
    />
  )
}

export default ContentCarouselComponent
