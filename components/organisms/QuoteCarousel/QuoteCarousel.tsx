import React, { useState } from 'react'
import CarouselControls from '../../atoms/CarouselControls/CarouselControls'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, A11y, EffectFade } from 'swiper'
SwiperCore.use([Navigation, A11y, EffectFade])
import TextCarouselItem, {
  TextCarouselItemProps,
} from '../../molecules/TextCarouselItem/TextCarouselItem'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import QuoteIcon from '../../atoms/icons/Quote/QuoteIcon'

interface QuoteCarouselProps {
  title?: string
  items: TextCarouselItemProps[]
  id: string
}

const QuoteCarousel = ({ title, items, id }: QuoteCarouselProps) => {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const gridLines: Grid[] = [
    {
      desktopStartColumn: 4,
      mobileStartColumn: 1,
      align: 'right',
      alignMobile: 'right',
    },
  ]
  const handleSwiper = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <section
      className="border-b border-gray-light"
      role="contentinfo"
      aria-label={title}
    >
      <div className="container relative py-10 md:py-24">
        <GridLines grids={gridLines} />
        <div className="grid grid-cols-5 grid-x-5 md:grid-cols-10 md:gap-x-10">
          <div className="col-span-full md:col-start-4 md:col-span-5">
            <QuoteIcon />
          </div>
          <div className="col-span-full md:col-start-4 md:col-span-5">
            <Swiper
              slideBlankClass="hidden"
              autoHeight
              onSlideChange={(swiper) => handleSwiper(swiper)}
              onSwiper={(swiper) => handleSwiper(swiper)}
              navigation={{
                prevEl: `.back-${id}`,
                nextEl: `.forward-${id}`,
              }}
              effect="fade"
              fadeEffect={{
                crossFade: true,
              }}
              speed={500}
              breakpoints={{
                768: {
                  allowTouchMove: false,
                },
              }}
            >
              {items.map((item: any, index) => {
                return (
                  <SwiperSlide key={index}>
                    <TextCarouselItem {...item} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          {items.length > 1 && (
            <div className="absolute bottom-10 right-0 z-10 md:static col-span-2 flex items-end justify-center">
              <CarouselControls
                id={id}
                disableLeft={isBeginning}
                disableRight={isEnd}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default QuoteCarousel
