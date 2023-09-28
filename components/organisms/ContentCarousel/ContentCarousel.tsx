import React, { useEffect, useRef, useState } from 'react'
import CarouselControls from '../../atoms/CarouselControls/CarouselControls'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, A11y } from 'swiper'
SwiperCore.use([Navigation, A11y])
import ContentCarouselItem, {
  ContentCarouselItemProps,
} from '../../molecules/ContentCarouselItem/ContentCarouselItem'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import clsx from 'clsx'
import Heading from '../../atoms/Heading/Heading'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'

interface ContentCarouselProps {
  title?: string
  items: ContentCarouselItemProps[]
  link?: { name: string; url: string }
  id: string
}

const ContentCarousel = ({ title, items, link, id }: ContentCarouselProps) => {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const swiper = useRef(null)
  const gridLines: Grid[] = [
    {
      desktopStartColumn: 7,
      mobileStartColumn: 1,
      align: 'right',
      alignMobile: 'right',
    },
    {
      desktopStartColumn: 0,
      mobileStartColumn: 5,
      align: 'middle',
      alignMobile: 'middle',
    },
  ]
  const handleSwiper = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
    setActiveSlide(swiper.activeIndex)
  }

  const [imageHeight, setImageHeight] = useState(0)

  return (
    <section
      className="overflow-hidden border-b border-gray-light"
      role="contentinfo"
      aria-label={title}
    >
      <div
        className={clsx(
          'container relative pt-10 pb-10 md:pt-24',
          link ? 'md:pb-14' : 'md:pb-24'
        )}
      >
        <GridLines endLineDesktop grids={gridLines} />
        <div className="grid grid-cols-5 gap-x-5 md:grid-cols-10 md:gap-x-10">
          <div className="col-span-full md:col-span-2 mb-5 md:mb-0">
            {title && (
              <Heading level={4} hasBlackDot className="h6">
                {title}
              </Heading>
            )}
          </div>
          <div className="col-span-4" ref={swiper}>
            <Swiper
              speed={500}
              slideBlankClass="hidden"
              autoHeight
              className="content-carousel force-overflow-visible show-next"
              onSlideChange={(swiper) => handleSwiper(swiper)}
              onSwiper={(swiper) => handleSwiper(swiper)}
              navigation={{
                prevEl: `.back-${id}`,
                nextEl: `.forward-${id}`,
              }}
            >
              {items.map((item: any, index) => {
                const showSlide =
                  index === activeSlide || index === activeSlide + 1
                return (
                  <SwiperSlide
                    key={index}
                    className={clsx(
                      'transition-opacity duration-300',
                      showSlide ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    <ContentCarouselItem
                      tabIndex={showSlide ? index : -1}
                      setImageHeight={setImageHeight}
                      {...item}
                      hideDetails={index !== activeSlide}
                    />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
          <div
            className="col-span-full flex items-start justify-end relative z-10 col-start-7"
            style={{ marginTop: imageHeight + 30 }}
          >
            <CarouselControls
              id={id}
              disableLeft={isBeginning}
              disableRight={isEnd}
              stackedMobile
            />
          </div>
        </div>
        {link && (
          <div className="text-right mt-7 relative">
            <StylisedLink
              type="tertiary"
              linkTo={link.url}
              linkText={link.name}
              icon={<ArrowIcon rightArrow width={17} height={20} />}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default ContentCarousel
