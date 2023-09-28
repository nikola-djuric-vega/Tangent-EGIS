import clsx from 'clsx'
import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import LinkGridItem from '../../atoms/LinkGridItem/LinkGridItem'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'

import { TextCarouselItemProps } from '../../molecules/TextCarouselItem/TextCarouselItem'
import { Media } from '../../../types/CMS'

export interface LinkGridItemProps {
  title: string
  subTitle: string
  showLink?: boolean
  image: Media
  content: string
  quotes?: TextCarouselItemProps[]
  linkTo?: string
  downloadable?: boolean
  link?: { url: string | undefined; name: string | undefined }
  bioLinkText?: string
}

interface LinkGridListProps {
  title?: string
  bg?: boolean
  linkGridArray: LinkGridItemProps[]
  twoColumnLayout?: boolean
  stylisedLink?: string
  stylisedLinkUrl?: string
  setOpen(visible: boolean): void
  setSelectedItem(item: any): void
  fallbackImage?: { url: string }
  itemButtonText?: string
}

const LinkGridList = ({
  title,
  bg,
  linkGridArray,
  twoColumnLayout,
  stylisedLink,
  stylisedLinkUrl,
  setOpen,
  setSelectedItem,
  fallbackImage,
  itemButtonText,
}: LinkGridListProps) => {
  const linkItemListGrids: Grid[] = [
    {
      align: 'right',
      alignMobile: 'right',
      desktopStartColumn: 4,
      mobileStartColumn: 1,
    },
    {
      align: 'right',
      alignMobile: 'right',
      desktopStartColumn: 7,
    },
  ]

  function clickItem(item: Object) {
    setSelectedItem(item)
    setOpen(true)
  }

  return (
    <div className={clsx('relative')}>
      {bg && (
        <div className="sm:bg-steel-gray-lightest sm:w-full sm:h-full absolute" />
      )}
      <div>
        <GridLines
          grids={linkItemListGrids}
          endLineDesktop={!twoColumnLayout}
        />
        <div className="relative grid grid-cols-5 gap-10 sm:grid-cols-10 md:py-20 py-10">
          <div
            className={clsx('relative col-start-1 h-full', {
              'col-span-full': !twoColumnLayout,
              'col-span-3': twoColumnLayout,
            })}
          >
            {title && (
              <Heading level={6} hasBlackDot>
                {title}
              </Heading>
            )}
          </div>

          <div
            className={clsx({
              'lg:col-start-1 grid grid-cols-7 lg:grid-cols-10 gap-10 col-span-full':
                !twoColumnLayout,
              'col-start-1 xl:col-start-4 grid grid-cols-7 gap-10 col-span-full':
                twoColumnLayout,
            })}
          >
            {linkGridArray?.map((item: any) => {
              return (
                <div
                  data-testid="link-grid-item"
                  onClick={() => item.showLink && clickItem(item)}
                  key={item.title}
                  className="col-span-full md:col-span-3 lg:pl-5 relative"
                >
                  <LinkGridItem
                    showLink={item.showLink}
                    buttonText={
                      item.bioLinkText ? item.bioLinkText : itemButtonText
                    }
                    image={
                      item.image ? item.image : fallbackImage && fallbackImage
                    }
                    title={item.title}
                    subTitle={item.subTitle}
                  />
                </div>
              )
            })}
          </div>
          {!!stylisedLink && !!stylisedLinkUrl && (
            <div
              data-testid="stylisedLink-testing"
              className="col-start-1 lg:col-start-8 col-span-full"
            >
              <StylisedLink
                type="primary"
                linkTo={stylisedLinkUrl}
                linkText={stylisedLink}
                backgroundColour="bg-super-lime"
                hoverColour="bg-midnight-blue"
                textColour="text-midnight-blue"
                textHoverColour="group-hover:text-super-lime"
                icon={<ArrowIcon rightArrow width={17} height={20} />}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LinkGridList
