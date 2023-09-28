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
  bioLinkText?: string
}

interface SimpleLinkGridListProps {
  linkGridArray: LinkGridItemProps[]
  setOpen(visible: boolean): void
  setSelectedItem(item: any): void
}

const SimpleLinkGridList = ({
  linkGridArray,
  setOpen,
  setSelectedItem,
}: SimpleLinkGridListProps) => {
  const clickItem = (item: Object) => {
    setSelectedItem(item)
    setOpen(true)
  }
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    item: Object
  ) => {
    if (e.key === 'Enter') clickItem(item)
  }

  return (
    <div className="grid grid-cols-5 gap-5 md:grid-cols-6 lg:grid-cols-9 md:gap-10 col-span-full">
      {linkGridArray?.map((item) => {
        return (
          <div
            data-testid="link-grid-item"
            onClick={() => item.showLink && clickItem(item)}
            onKeyDown={(e) => handleKeyDown(e, item)}
            key={item.title}
            tabIndex={0}
            className="col-span-full md:col-span-3 relative"
          >
            <LinkGridItem
              showLink={item.showLink}
              buttonText={item.bioLinkText}
              image={item.image}
              title={item.title}
              subTitle={item.subTitle}
            />
          </div>
        )
      })}
    </div>
  )
}

export default SimpleLinkGridList
