import { HomePage as HomePageType } from '../../types/CMS'
import CoreMetadata from '../../components/atoms/CoreMetadata/CoreMetadata'
import TopNav from '../../components/organisms/TopNav/TopNav'
import GlobalFootprintList from '../../components/organisms/GlobalFootprintList/GlobalFootprintList'
import Text from '../../components/contentTypes/Text/Text'
import React, { useEffect, useState } from 'react'
import Footer from '../../components/organisms/Footer/Footer'
import AnimatedBanner from '../../components/organisms/AnimatedBanner/AnimatedBanner'
import Cta from '../../components/contentTypes/Cta/Cta'
import RelatedNewsAndInsights from '../../components/contentTypes/RelatedNewsAndInsights/RelatedNewsAndInsights'
import ContentCarouselComponent from '../../components/contentTypes/ContentCarouselComponent/ContentCarouselComponent'
import ThreeTextColumnComponent from '../../components/contentTypes/ThreeTextColumnComponent/ThreeTextColumnComponent'
import VideoBackgroundBanner from '../../components/organisms/VideoBackgroundBanner/VideoBackgroundBanner'
import { Transition } from '@headlessui/react'
import { useInView, InView } from 'react-intersection-observer'
import clsx from 'clsx'
import useMobile from '../../utils/useMobile'

interface HomePageProps {
  data: HomePageType
}

export const HomePage = ({ data }: HomePageProps) => {
  const translateThreeTextColumn = {
    title: data.threeColumnTextTitle,
    threeColumnTextItems: data.threeColumnText,
  }
  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
  })

  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isMobile = useMobile()

  return (
    <>
      <CoreMetadata data={data} />
      {data.navigation && (
        <div className="fixed z-100 w-full">
          <TopNav
            primaryLinks={data.navigation[0]?.primaryLinks}
            secondaryLinks={data.navigation[0]?.secondaryLinks}
            url_en={data?.url_en}
            url_fr={data?.url_fr}
            url_es={data?.url_es}
            url_pt={data?.url_pt}
            pageTitle={data?.pageTitle!}
            transparent={scrollPosition === 0}
          />
        </div>
      )}
      <div>
        {data.heroBannerItems && (
          <AnimatedBanner items={data.heroBannerItems} />
        )}
      </div>
      <div className="pb-5 md:pb-0">
        {data.introText && <Text {...data.introText[0]} animation />}
      </div>
      <InView>
        <div
          className="h-1 relative w-full rounded-full overflow-hidden"
          ref={ref}
        >
          <div
            className={clsx(
              'lg:w-homePageGreenLine w-full absolute transition-height duration-400',
              inView ? 'h-full opacity-100' : 'h-0 opacity-0'
            )}
          >
            <Transition
              show={inView}
              enter="transition-width delay-200 duration-3000 ease-linear transform"
              enterFrom="opacity-0 w-0"
              enterTo="opacity-100 w-full"
              leave="transition-width duration-3000 ease-linear transform"
              leaveFrom="w-full opacity-100"
              leaveTo="w-0 opacity-0"
              className="h-full bg-super-lime relative"
            />
          </div>
        </div>
      </InView>
      <div>
        {translateThreeTextColumn && (
          <ThreeTextColumnComponent {...translateThreeTextColumn} animation />
        )}
      </div>
      <div>
        {data.carousel && data.carouselComponentTitle && (
          <section className="bg-midnight-blue magic">
            <div className="magic-container">
              <div className="magic-wrap">
                <GlobalFootprintList
                  footprintData={data.carousel}
                  footprintHeading={data.carouselComponentTitle}
                />
              </div>
            </div>
          </section>
        )}
      </div>
      <div>
        {data.contentCarousel && (
          <ContentCarouselComponent {...data.contentCarousel[0]} />
        )}
      </div>
      <div>
        {data.relatedNewsInsights && (
          <RelatedNewsAndInsights
            animation={!isMobile}
            {...data.relatedNewsInsights[0]}
          />
        )}
      </div>
      <div>
        {data.videoBackground && (
          <VideoBackgroundBanner animation {...data.videoBackground[0]} />
        )}
      </div>
      <div>{data.cTA && <Cta {...data.cTA[0]} animation />}</div>
      <footer>{data.footer && <Footer {...data.footer} />}</footer>
    </>
  )
}
