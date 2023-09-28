import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import Heading from '../../atoms/Heading/Heading'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import Image from 'next/image'
import { useInView, InView } from 'react-intersection-observer'
import { Parallax } from 'react-parallax'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'

export default function VideoBackgroundBanner({
  category,
  video,
  title,
  introText,
  link,
  preloadImage,
  animation = false,
}: {
  category: string
  video: { url: string }
  title: string
  introText: string
  link?: { name: string; url: string }
  preloadImage: { url: string; umbracoAlternateText: string; name?: string }
  animation?: boolean
}) {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false)

  const handleVideoLoad = () =>
    video?.url?.trim() !== '' ? setVideoLoaded(true) : setVideoLoaded(false)

  useEffect(() => {
    handleVideoLoad()
  }, [])

  const [ref, inView] = useInView({
    threshold: 0.24,
  })

  let videoBannerDiv: any
  let videoBannerData: any
  let videoBannerOffSetY: any
  if (typeof window === 'object') {
    videoBannerDiv = document.querySelector('#videoBannerDiv')

    if (videoBannerDiv) {
      videoBannerData = videoBannerDiv.getBoundingClientRect()
      videoBannerOffSetY = -videoBannerData.y + 200
    }
  }

  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  let targetOffSet: number = 0
  if (typeof window !== 'undefined') {
    targetOffSet =
      window.pageYOffset < videoBannerOffSetY
        ? offsetY * 0
        : videoBannerOffSetY * 0.6
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const grids: Grid[] = [
    {
      align: 'right',
      desktopStartColumn: 7,
      alignMobile: 'left',
    },
    {
      align: 'right',
      desktopStartColumn: 9,
      alignMobile: 'left',
    },
  ]

  return (
    <Parallax disabled={!animation}>
      <div
        className="relative lg:h-screen md:h-screen pb-10 overflow-hidden "
        style={{ transform: `translateY(${animation && targetOffSet}px)` }}
        id="videoBannerDiv"
        ref={ref}
      >
        <div className="bg-gradient-to-r from-black to-transparent opacity-80 inset-0 absolute h-full w-full md:h-screen md:w-screen z-10"></div>
        <div className="z-10 absolute inset-0 container">
          <GridLines
            colour="bg-white"
            opacity="opacity-20"
            endLineDesktop
            grids={grids}
          />
        </div>
        <div className="w-screen h-full md:h-screen absolute">
          {videoLoaded && !!video ? (
            <video
              playsInline
              autoPlay
              loop
              muted
              className={clsx(
                'absolute object-cover h-full w-full',
                videoLoaded ? 'opacity-100' : 'opacity-0'
              )}
            >
              <source src={video.url} type="video/mp4" />
            </video>
          ) : (
            <>
              {!!preloadImage && (
                <Image
                  priority
                  alt={preloadImage.umbracoAlternateText || preloadImage.name}
                  src={preloadImage.url}
                  layout="fill"
                  className={clsx(
                    videoLoaded ? 'opacity-0' : 'opacity-100',
                    'absolute object-fill h-full w-full'
                  )}
                />
              )}
            </>
          )}
        </div>
        <InView className={clsx('relative', inView ? 'active' : '')}>
          <div
            className={clsx(
              'grid md:grid-cols-10 grid-cols-5 gap-x-5 md:gap-x-10 md:pt-20 pt-8 relative container z-20',
              animation && 'introTextBox'
            )}
          >
            {!!category && (
              <div className="col-start-1 col-span-full">
                <Heading level={2} hasWhiteDot className="text-white h6">
                  {category}
                </Heading>
              </div>
            )}

            {!!title && (
              <div className="col-start-1 xl:col-start-2 2xl:col-start-2 2xl:col-span-4 md:col-span-8 col-span-full 2xl:mt-20 mt-7 xl:pr-40">
                <Heading level={3} hasWhiteDot className="text-white h4">
                  {title}
                </Heading>
              </div>
            )}
            <div className="col-start-1 xl:col-start-2 2xl:col-start-2 col-span-full md:col-span-8 2xl:col-span-4 xl:my-7 mt-2 xl:pr-14">
              <span className="body2 text-white">{introText}</span>
            </div>

            {link && link.name && link.url && (
              <div className="col-start-1 xl:col-start-2 mt-7 xl:mt-0 relative">
                <StylisedLink
                  type="primary"
                  linkText={link.name}
                  linkTo={link.url}
                  backgroundColour="bg-super-lime"
                  hoverColour="bg-midnight-blue"
                  textColour="text-midnight-blue"
                  textHoverColour="group-hover:text-super-lime"
                  icon={<ArrowIcon rightArrow width={17} height={20} />}
                />
              </div>
            )}
          </div>
        </InView>
      </div>
    </Parallax>
  )
}
