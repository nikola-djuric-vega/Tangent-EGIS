import clsx from 'clsx'
import React from 'react'

import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'
import InfoPanel from '../../atoms/InfoPanel/InfoPanel'
import Image from 'next/image'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import { Media } from '../../../types/CMS'

export interface ContentItem {
  title: string
  richText: string
  image?: Media
  imagePosition: string
  link?: { url: string; name: string }
}

interface Props {
  title?: string
  contentItems: ContentItem[]
}

function ContentItem({
  imageLeft,
  contentItem,
}: {
  contentItem: ContentItem
  imageLeft: boolean
}) {
  if (imageLeft) {
    return (
      <div
        className={clsx(
          'grid grid-cols-1 md:grid-cols-10 items-center z-10 col-span-full md:gap-10'
        )}>
        <div
          className={clsx(
            'md:col-span-5 md:ml-5 order-last md:order-none mt-2 md:mt-0'
          )}>
          {contentItem.image?.umbracoFile?.url &&
            contentItem.image.blur_url && (
              <Image
                alt={
                  contentItem.image.umbracoAlternateText ||
                  contentItem.image.name
                }
                width="600"
                height="600"
                src={contentItem.image.umbracoFile.url}
                placeholder="blur"
                blurDataURL={contentItem.image.blur_url}
              />
            )}
        </div>
        <div className={clsx('col-start-1 md:col-start-7 col-span-4 md:pr-14')}>
          <InfoPanel title={contentItem.title}>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: contentItem.richText }}
            />
            {!!contentItem.link &&
              !!contentItem.link.name &&
              !!contentItem.link.url && (
                <div className="my-5">
                  <StylisedLink
                    type="secondary"
                    linkText={contentItem.link.name}
                    linkTo={contentItem.link.url}
                    onlyBorder
                    hoverColour="bg-midnight-blue"
                    textColour="text-midnight-blue"
                    textHoverColour="group-hover:text-white"
                    icon={<ArrowIcon rightArrow width={17} height={20} />}
                  />
                </div>
              )}
          </InfoPanel>
        </div>
      </div>
    )
  } else {
    return (
      <div
        className={clsx(
          'grid grid-cols-5 md:grid-cols-10 items-center z-10 col-span-full md:gap-10'
        )}>
        <div className={clsx('col-span-5 md:col-span-4 md:ml-20')}>
          <InfoPanel title={contentItem.title}>
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: contentItem.richText }}
            />
            {!!contentItem.link &&
              !!contentItem.link.name &&
              !!contentItem.link.url && (
                <div className="my-5">
                  <StylisedLink
                    type="secondary"
                    linkText={contentItem.link.name}
                    linkTo={contentItem.link.url}
                    onlyBorder
                    hoverColour="bg-midnight-blue"
                    textColour="text-midnight-blue"
                    textHoverColour="group-hover:text-white"
                    icon={<ArrowIcon rightArrow width={17} height={20} />}
                  />
                </div>
              )}
          </InfoPanel>
        </div>
        <div
          className={clsx('col-span-full md:col-start-6 mt-5 md:mr-5 md:mt-0')}>
          {contentItem.image?.umbracoFile?.url &&
            contentItem.image.blur_url && (
              <Image
                width="600"
                height="600"
                src={contentItem.image.umbracoFile.url}
                alt={
                  contentItem.image.umbracoAlternateText ||
                  contentItem.image.name
                }
                placeholder="blur"
                blurDataURL={contentItem.image.blur_url}
              />
            )}
        </div>
      </div>
    )
  }
}

export default function ImageContentBreak({ title, contentItems }: Props) {
  const grids: Grid[] = [
    {
      align: 'right',
      alignMobile: 'right',
      desktopStartColumn: 1,
      mobileStartColumn: 1,
    },
    {
      align: 'right',
      alignMobile: 'right',
      desktopStartColumn: 7,
      mobileStartColumn: 5,
    },
  ]

  return (
    <div className="relative">
      <GridLines grids={grids} />
      <div className="grid grid-cols-5 md:grid-cols-10 md:px-0 gap-5 md:gap-10">
        <div className="col-span-full mt-10 md:mt-20 mb-8 md:mb-6 z-10">
          {title && (
            <Heading level={6} hasBlackDot>
              {title}
            </Heading>
          )}
        </div>
        <div className="grid grid-cols-8 col-span-full space-y-12 md:space-y-20 mb-12 md:mb-20">
          {contentItems &&
            contentItems.map((contentItem, idx) => (
              <ContentItem
                key={`content_item_${idx}`}
                imageLeft={contentItem.imagePosition === 'Left'}
                contentItem={contentItem}
              />
            ))}
        </div>
      </div>
    </div>
  )
}
