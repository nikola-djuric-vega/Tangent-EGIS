import clsx from 'clsx'
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Card from '../Card/Card'
import Heading from '../../atoms/Heading/Heading'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import InlineCTA from '../InlineCTA/InlineCTA'
import CustomScrollBar from '../../atoms/CustomScrollBar/CustomScrollBar'
import { Media } from '../../../types/CMS'
import { useInView, InView } from 'react-intersection-observer'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import useMobile from '../../../utils/useMobile'

export interface InformationItem {
  type?: string
  title?: string
  bg?: boolean
  subTitle?: string
  description?: string
  content?: React.ReactNode
  text?: React.ReactNode
  linkTo: string
  image?: Media
  tagLine?: React.ReactNode
  featured?: boolean
  linkText?: string
}

interface Link {
  url: string
  name: string
}

interface ThreeColumnLayoutProps {
  title?: string
  bg?: boolean
  itemType: 'infoItem' | 'cardItem'
  informationArray: InformationItem[]
  inlineCTA?: {
    title: string
    text: string
    link: Link
  }
  linkText?: string
  linkTo?: string
  mobileView?: 'scroll' | 'stacked'
  featured?: boolean
  animation?: boolean
  primaryCTA?: Link
  secondaryCTA?: Link
}

const ThreeColumnLayout = ({
  title,
  linkTo,
  linkText,
  bg,
  inlineCTA,
  itemType,
  informationArray,
  mobileView = 'stacked',
  featured,
  animation = false,
  primaryCTA,
  secondaryCTA,
}: ThreeColumnLayoutProps) => {
  const infoItemGrids: Grid[] = [
    {
      align: 'right',
      alignMobile: 'right',
      desktopStartColumn: 5,
      mobileStartColumn: 3,
    },
    {
      align: 'right',
      alignMobile: 'right',
      desktopStartColumn: 8,
    },
  ]

  const cardItemGrids: Grid[] = [
    {
      align: 'right',
      alignMobile: 'right',
      desktopStartColumn: 4,
      mobileStartColumn: 3,
    },
    {
      align: 'right',
      alignMobile: 'right',
      desktopStartColumn: 7,
    },
  ]

  const [scrollPos, setScrollPos] = useState(0)
  const [isScrollVisible, setIsScrollVisible] = useState<boolean>(true)

  const scrollVisibleRef = useRef<undefined | any>()

  useEffect(() => {
    function handleResize() {
      setIsScrollVisible(
        scrollVisibleRef.current.scrollWidth >
          scrollVisibleRef.current.clientWidth
      )
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function onScroll(e: SyntheticEvent<HTMLDivElement>) {
    const userScroll = e.currentTarget.scrollLeft
    const lengthOfScroll =
      e.currentTarget.scrollWidth - e.currentTarget.clientWidth

    const convertToPercentage = (userScroll / lengthOfScroll) * 100

    setScrollPos(convertToPercentage)
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  })

  const isMobile = useMobile()

  return (
    <div
      ref={ref}
      className={clsx(
        'relative pt-10 pb-10',
        animation && 'overflow-hidden',
        itemType === 'infoItem' && 'md:pt-24 md:pb-24',
        itemType === 'cardItem' && linkTo && linkText && 'md:pt-24 md:pb-16',
        itemType === 'cardItem' && (!linkTo || !linkText) && 'md:pt-24 md:pb-20'
      )}
    >
      {!!bg && (
        <div
          data-testid="bg-test"
          className="sm:bg-steel-gray-lightest sm:w-full sm:h-full absolute"
        ></div>
      )}

      {title && (
        <div className="relative col-span-1 col-start-1 h-full">
          <Heading level={3} hasBlackDot className="h6">
            {title}
          </Heading>
        </div>
      )}
      {/* vertical lines/borders */}
      {itemType === 'infoItem' ? (
        <GridLines
          grids={infoItemGrids}
          endLineMobile
          colour="bg-gray-light md:bg-steel-gray-light"
        />
      ) : (
        <div className="h-full w-full hidden md:block">
          <GridLines grids={cardItemGrids} />
        </div>
      )}
      {/* content */}
      <InView className={clsx(inView ? 'active' : '')}>
        <div
          data-testid="scroll"
          ref={scrollVisibleRef}
          onScroll={onScroll}
          className={clsx(
            'relative',
            animation && 'threeTextColumn',
            itemType === 'infoItem' && 'threeColumnItemContainer pt-8',
            itemType === 'cardItem' && 'md:pt-11 md:pb-0',
            mobileView === 'scroll' && itemType === 'cardItem'
              ? 'flex flex-nowrap md:grid grid-cols-5 gap-5 md:grid-cols-10 md:gap-10 overflow-x-auto md:overflow-visible scrollbar-hide -mr-5 sm:-mr-0'
              : 'grid grid-cols-5 gap-5 lg:grid-cols-10 lg:gap-10'
          )}
        >
          {informationArray.map((informationItem, index) => {
            if (itemType === 'infoItem') {
              return (
                <React.Fragment key={index}>
                  <Heading
                    className={clsx(
                      `col-span-5 items-end md:grid lg:col-span-3 md:col-span-5`,
                      animation && 'threeTextColumnBoxContent',

                      index === 0 && 'lg:col-start-2 md:col-start-1',
                      {
                        threeColumnItemHead1: index === 0,
                        threeColumnItemHead2: index === 1,
                        threeColumnItemHead3: index === 2,
                      }
                    )}
                    level={4}
                    hasBlackDot
                  >
                    {informationItem.title}
                  </Heading>
                  <div
                    className={clsx(
                      `col-span-5 items-end lg:col-span-3 md:col-span-5`,
                      animation && 'threeTextColumnBoxContent',

                      index === 0 && 'lg:col-start-2 md:col-start-1',
                      {
                        threeColumnItemBody1: index === 0,
                        threeColumnItemBody2: index === 1,
                        threeColumnItemBody3: index === 2,
                      }
                    )}
                  >
                    {informationItem.text}
                  </div>
                </React.Fragment>
              )
            } else {
              return (
                <React.Fragment key={index}>
                  {!!inlineCTA?.link && (
                    <div
                      className={clsx(
                        ' h-full relative lg:col-span-3 col-start-1 col-span-5 md:col-span-4 mt-4 md:mt-0 pt-5 md:pt-0',
                        {
                          'first:block hidden': !featured,
                          hidden: featured && index !== 2,
                        }
                      )}
                    >
                      <div
                        className={clsx(
                          'relative md:ml-5',
                          mobileView === 'scroll'
                            ? 'w-screen md:w-full'
                            : 'w-full'
                        )}
                      >
                        <InlineCTA
                          linkText={inlineCTA.link?.name}
                          title={inlineCTA.title}
                          linkTo={inlineCTA.link?.url}
                          text={inlineCTA.text}
                        />
                      </div>
                    </div>
                  )}

                  <div
                    data-testid="variant-test"
                    key={index}
                    className={clsx(
                      animation && 'threeTextColumnBox',
                      {
                        'md:col-span-4 first:md:col-span-3 first:md:col-start-1':
                          !featured,
                        'lg:col-span-6': featured && index === 0,
                        'lg:col-span-4': featured && index === 1,
                        'pt-5': index === 0,
                      },
                      'col-span-5 relative lg:col-span-3 md:col-span-4 md:pt-0 whitespace-normal first:md:col-span-3 first:md:col-start-1 pb-8 last:border-none last:pb-0'
                    )}
                  >
                    <div
                      className={clsx(
                        'col-span-5 relative md:col-span-3 md:pt-0',
                        index === 0 && 'pt-5',
                        index === 0 &&
                          !inlineCTA &&
                          'md:col-span-3 md:col-start-1',
                        index === informationArray.length - 1
                          ? 'border-none pb-0'
                          : 'pb-8 md:pb-0',
                        mobileView !== 'scroll' &&
                          'border-b border-gray-light md:border-none'
                      )}
                    >
                      <div
                        className={clsx(
                          'md:ml-5 relative',
                          mobileView === 'scroll'
                            ? 'w-screen md:w-full'
                            : 'w-full'
                        )}
                      >
                        {featured && (index === 0 || index === 1) ? (
                          <FeaturedCard
                            height={384}
                            secondary={index === 1}
                            width={index === 0 && !isMobile ? 752 : 488}
                            linkTo={informationItem?.linkTo}
                            image={informationItem?.image}
                            tagline={informationItem?.tagLine}
                            title={informationItem?.title}
                            subTitle={informationItem?.subTitle}
                            description={informationItem?.description}
                          />
                        ) : (
                          <Card
                            linkTo={informationItem?.linkTo}
                            image={informationItem?.image}
                            tagline={informationItem?.tagLine}
                            title={informationItem?.title}
                            subTitle={informationItem?.subTitle}
                            description={
                              !featured
                                ? informationItem?.description
                                : undefined
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
            }
          })}
        </div>
        {linkTo && linkText && (
          <div
            data-testid="stylisedLink-testing"
            className="text-right mt-10 md:mt-20"
          >
            <StylisedLink
              type="primary"
              linkText={linkText}
              linkTo={linkTo}
              backgroundColour="bg-super-lime"
              hoverColour="bg-midnight-blue"
              textColour="text-midnight-blue"
              textHoverColour="group-hover:text-super-lime"
              icon={<ArrowIcon rightArrow width={17} height={20} />}
            />
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center space-y-5 md:space-y-0 md:space-x-7 mr-auto justify-end">
          {!!primaryCTA && !!primaryCTA.name && !!primaryCTA.url && (
            <div>
              <StylisedLink
                type="secondary"
                linkText={primaryCTA.name}
                linkTo={primaryCTA.url}
                textColour="text-midnight-blue"
                textHoverColour="group-hover:text-white"
                onlyBorder
                icon={<ArrowIcon rightArrow width={17} height={20} />}
              />
            </div>
          )}
          {!!secondaryCTA && !!secondaryCTA.name && !!secondaryCTA.url && (
            <div>
              <StylisedLink
                type="secondary"
                linkText={secondaryCTA.name}
                linkTo={secondaryCTA.url}
                textColour="text-midnight-blue"
                textHoverColour="group-hover:text-white"
                onlyBorder
                icon={<ArrowIcon rightArrow width={17} height={20} />}
              />
            </div>
          )}
        </div>
      </InView>

      {mobileView === 'scroll' && isScrollVisible && (
        <div className="mb-10">
          <CustomScrollBar
            scrollPos={scrollPos}
            width={15}
            backgroundColour="bg-gray"
          />
        </div>
      )}
    </div>
  )
}

export default ThreeColumnLayout
