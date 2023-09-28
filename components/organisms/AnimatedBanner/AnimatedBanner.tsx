import React, { useEffect, useState } from 'react'
import BannerTimeline from '../../molecules/BannerTimeline/BannerTimeline'
import BannerCTA from '../../molecules/BannerCTA/BannerCTA'
import clsx from 'clsx'
import Image from 'next/image'
import { formatNumber } from '../../../utils/helpers'
import GridLines from '../../atoms/GridLines/GridLines'
import { Media } from '../../../types/CMS'

interface AnimatedHeroProps {
  items: AnimatedHeroItemProps[]
}

interface AnimatedHeroItemProps {
  title: string[]
  introText: string
  navText: string
  image?: Media
  link?: { url: string; name: string }
}

const AnimatedBanner = ({ items }: AnimatedHeroProps) => {
  let bannerImage: any
  let bannerBottom: any

  function bottomBoxAnimation() {
    if (typeof window === 'object') {
      bannerImage = document.querySelector('.banner-image-wrap')
      bannerBottom = document.querySelector('.banner-bottom')
    }
    setTimeout(() => {
      if (bannerImage && bannerBottom) {
        bannerImage.classList.add('active')
        bannerBottom.classList.add('active')
      }
    }, 1000)
  }

  useEffect(() => {
    bottomBoxAnimation()
  }, [])
  const [activeIndex, setActiveIndex] = useState<number>(-1)
  useEffect(() => setActiveIndex(0), [])
  return (
    <div className="animated-banner relative w-full overflow-hidden">
      <div className="absolute inset-0">
        {items.map((item, index) => {
          return (
            <React.Fragment key={`banner-item-${index}`}>
              <div
                className={clsx(
                  'absolute inset-0 transition-opacity duration-300 banner-image-wrap',
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                )}
              >
                {item.image?.umbracoFile?.animated_banner_url && (
                  <>
                    {item.image.blur_url ? (
                      <div>
                        <span className="banner-line banner-line--one"></span>
                        <span className="banner-line banner-line--two"></span>
                        <span className="banner-line banner-line--three"></span>
                        <span className="banner-line banner-line--four"></span>
                        <Image
                          className="w-full h-full object-cover"
                          src={item.image?.umbracoFile?.animated_banner_url}
                          alt={
                            item.image?.umbracoAlternateText || item.image.name
                          }
                          layout="fill"
                          objectFit="cover"
                          blurDataURL={item.image.blur_url}
                          placeholder="blur"
                        />
                      </div>
                    ) : (
                      <div>
                        <span className="banner-line banner-line--one"></span>
                        <span className="banner-line banner-line--two"></span>
                        <span className="banner-line banner-line--three"></span>
                        <span className="banner-line banner-line--four"></span>
                        <Image
                          className="w-full h-full object-cover"
                          src={item.image?.umbracoFile?.animated_banner_url}
                          alt={
                            item.image?.umbracoAlternateText || item.image?.name
                          }
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
              <div
                className={clsx(
                  'absolute inset-0 top-24 lg:top-32 2xl:top-1/4 transition-opacity duration-300',
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                )}
              >
                <div className="container">
                  <BannerCTA
                    number={formatNumber(index + 1)}
                    title={item.title}
                    subheading={item.introText}
                    link={item.link}
                    active={index === activeIndex}
                  />
                </div>
              </div>
            </React.Fragment>
          )
        })}
        <div className="absolute inset-0">
          <div className="container h-full relative">
            {/* <GridLines
              grids={[
                {
                  desktopStartColumn: 5,
                  align: 'middle',
                  alignMobile: 'left',
                },
                {
                  desktopStartColumn: 8,
                  mobileStartColumn: 2,
                  align: 'middle',
                  alignMobile: 'left',
                },
              ]}
              endLineDesktop
              colour="bg-white bg-opacity-20"
            /> */}
          </div>
        </div>
        <div className="absolute left-0 bottom-0 w-full bg-midnight-blue md:left-midnight-blue overflow-hidden z-10 banner-bottom">
          <div className="container">
            <div className="grid grid-cols-5 2xl:grid-cols-10 gap-10">
              <div className="col-span-4 md:col-span-6">
                <BannerTimeline
                  timelineItems={items}
                  activeSlide={activeIndex}
                  setActiveSlide={setActiveIndex}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedBanner
