import React, { useEffect, useRef, useState } from 'react'
import CarouselControls from '../../atoms/CarouselControls/CarouselControls'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, A11y } from 'swiper'
SwiperCore.use([Navigation, A11y])
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import clsx from 'clsx'
import Heading from '../../atoms/Heading/Heading'
import Image from 'next/image'
import { Media } from '../../../types/CMS'

export interface ImageCarouselItemProps {
  title?: string
  image: Media
  isPortrait?: boolean
  description?: string
}

interface ImageCarouselProps {
  title?: string
  items: ImageCarouselItemProps[]
  id: string
}

const ImageCarousel = ({ title, items, id }: ImageCarouselProps) => {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [carouselMargin, setCarouselMargin] = useState(0)
  const swiper = useRef(null)
  const gridLines: Grid[] = [
    {
      desktopStartColumn: 7,
      mobileStartColumn: 1,
      align: 'middle',
      alignMobile: 'right',
    },
  ]
  const handleSwiper = (swiper: SwiperCore) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
    setActiveSlide(swiper.activeIndex)
  }
  const calculateCarousel = () => {
    if (swiper !== null && swiper.current !== undefined) {
      // @ts-ignore
      var offsets = swiper.current
        .querySelector('.card-text')
        ?.getBoundingClientRect()
      setCarouselMargin(offsets ? offsets.height * -1 : 0)
    }
  }

  const ImageSwiper = (showImage = false) => {
    return (
      <Swiper
        className="image-carousel force-overflow-visible show-next"
        spaceBetween={17}
        slidesPerView="auto"
        onSlideChange={(swiper: SwiperCore) => handleSwiper(swiper)}
        onSwiper={(swiper: SwiperCore) => handleSwiper(swiper)}
        navigation={{
          prevEl: `.back-${id}`,
          nextEl: `.forward-${id}`,
        }}
        breakpoints={{
          768: {
            spaceBetween: 40,
          },
        }}
      >
        {items.map((item: any, index) => {
          const showSlide =
            index === activeSlide ||
            index === activeSlide + 1 ||
            index === activeSlide + 2

          return (
            <SwiperSlide
              key={index}
              className={clsx(
                'transition-opacity duration-300',
                showSlide ? 'opacity-100' : 'opacity-0',
                showImage && 'h-auto self-end'
              )}
              style={{ maxWidth: item.isPortrait ? '344px' : '472px' }}
            >
              {showImage ? (
                <div
                  className={clsx(
                    'relative',
                    item.isPortrait
                      ? 'aspect-w-11 aspect-h-15'
                      : 'aspect-w-11 aspect-h-8'
                  )}
                >
                  {item.image && (
                    <>
                      {item.image.blur_url ? (
                        <Image
                          priority
                          src={
                            item.isPortrait &&
                            item?.image?.umbracoFile?.portrait_url
                              ? item.image.umbracoFile.portrait_url
                              : item.image.umbracoFile.url
                          }
                          alt={
                            item.image.umbracoAlternateText || item.image.name
                          }
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                          blurDataURL={item.image.blur_url}
                          placeholder="blur"
                        />
                      ) : (
                        <Image
                          src={
                            item.isPortrait && item.image.portrait_url
                              ? item.image.portrait_url
                              : item.image.url
                          }
                          alt={
                            item.image?.umbracoAlternateText || item.image?.name
                          }
                          layout="fill"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      )}
                    </>
                  )}
                </div>
              ) : (
                <div
                  className={clsx(
                    'card-text transform-opacity mt-5',
                    index !== activeSlide
                      ? 'duration-300 opacity-0'
                      : 'delay-200 duration-700'
                  )}
                >
                  {item.description && (
                    <p className="font-serif mt-1 text-lg leading-7 tracking-wide">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </SwiperSlide>
          )
        })}
      </Swiper>
    )
  }
  useEffect(() => {
    window.addEventListener('load', calculateCarousel)
    window.addEventListener('resize', calculateCarousel)
    return () => window.removeEventListener('resize', calculateCarousel)
  }, [])
  return (
    <section
      className="overflow-hidden border-b border-gray-light"
      role="contentinfo"
      aria-label={title}
    >
      <div className="container relative py-10 md:py-24">
        <GridLines grids={gridLines} endLineDesktop />
        <div className="grid grid-cols-5 gap-x-5 md:grid-cols-10 md:gap-x-10">
          <div className="col-span-full md:col-span-2 mb-5 md:mb-0">
            {title && <Heading level={6}>{title}</Heading>}
          </div>
          <div className="col-span-4 md:pl-5" ref={swiper}>
            {ImageSwiper(true)}
            {ImageSwiper(false)}
          </div>
          <div
            className="col-span-full flex items-start justify-end mt-7 relative z-10"
            style={{ marginTop: carouselMargin }}
          >
            <CarouselControls
              id={id}
              disableLeft={isBeginning}
              disableRight={isEnd}
              stackedMobile
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageCarousel
