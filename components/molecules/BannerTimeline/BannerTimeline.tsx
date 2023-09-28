import React, { useEffect, useState } from 'react'
import BannerTimelineItem from '../../atoms/BannerTimelineItem/BannerTimelineItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { A11y, Autoplay } from 'swiper'
SwiperCore.use([A11y, Autoplay])

export interface BannerTimelineProps {
  timelineItems: { navText: string }[]
  activeSlide: number
  setActiveSlide(value: number): void
}

const BannerTimeline = ({
  timelineItems,
  activeSlide,
  setActiveSlide,
}: BannerTimelineProps) => {
  const [swiper, setSwiper] = useState<undefined | SwiperCore>(undefined)
  const handleSlideClick = (index: number) => {
    setActiveSlide(index)
  }
  useEffect(() => {
    swiper?.slideTo(activeSlide)
    let timer1 = setTimeout(
      () =>
        handleSlideClick(
          activeSlide === timelineItems.length - 1 ? 0 : activeSlide + 1
        ),
      5800
    )
    return () => {
      clearTimeout(timer1)
    }
  }, [activeSlide])
  return (
    <div className="bg-midnight-blue pt-5 md:pt-8 pb-10 md:pb-12 pr-0 md:pr-6">
      <Swiper
        className="timeline-carousel force-overflow-visible"
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper: SwiperCore) =>
          setActiveSlide(swiper.activeIndex)
        }
        onSwiper={(swiper: SwiperCore) => setSwiper(swiper)}
        breakpoints={{
          768: {
            spaceBetween: 40,
            slidesPerView: 3,
            allowTouchMove: false,
          },
        }}
      >
        {timelineItems.length > 0 &&
          timelineItems.map((item, index) => {
            return (
              <SwiperSlide
                key={`timeline-item-${index}`}
                className="banner-box"
              >
                <BannerTimelineItem
                  number={index + 1}
                  title={item.navText}
                  active={index === activeSlide}
                  onClick={() => handleSlideClick(index)}
                />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}

export default BannerTimeline
