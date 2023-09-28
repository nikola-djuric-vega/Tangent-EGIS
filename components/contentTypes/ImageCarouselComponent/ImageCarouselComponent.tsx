import React from 'react'
import ImageCarousel, {
  ImageCarouselItemProps,
} from '../../organisms/ImageCarousel/ImageCarousel'

const ImageCarouselComponent = (data: any) => {
  let items: ImageCarouselItemProps[] = []
  data.imageCarouselItems?.map((item: any) => {
    items.push({
      description: item.caption,
      image: item.image,
      isPortrait: item.isPortrait,
    })
  })

  return <ImageCarousel items={items} id="image-carousel" title={data.title} />
}

export default ImageCarouselComponent
