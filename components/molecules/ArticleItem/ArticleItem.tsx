import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import clsx from 'clsx'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'

interface ArticleItemProps {
  sideItem?: React.ReactNode
  bg?: boolean
  children: React.ReactNode
  linkText?: string
  linkTo?: string
}

const ArticleItem = ({
  sideItem,
  children,
  bg,
  linkText,
  linkTo,
}: ArticleItemProps) => {
  const gridLines: Grid[] = [
    {
      desktopStartColumn: 4,
      mobileStartColumn: 1,
      align: 'right',
      alignMobile: 'right',
    },
  ]

  return (
    <div
      data-testid="article-item-container"
      className={clsx('relative', {
        'bg-steel-gray-lightest md:bg-transparent': bg,
      })}
    >
      <GridLines grids={gridLines} endLineDesktop />
      <div className="grid grid-cols-5 md:grid-cols-10 gap-5 md:gap-10 h-full">
        <div className="text-item-title pt-10 col-start-1 col-span-full md:col-span-2 md:pt-20">
          {!!sideItem && sideItem}
        </div>
        <div
          data-testid="article-item-child"
          className={clsx(
            'col-start-1 col-span-full grid grid-cols-5 md:grid-cols-8 gap-10 md:col-start-3',
            bg && 'md:bg-steel-gray-lightest'
          )}
        >
          <div
            className={clsx(
              'text-item-child col-span-full  md:col-start-2 md:col-span-5 md:pt-20 relative',
              !!linkText && !!linkTo ? 'md:pb-3' : 'md:pb-20'
            )}
          >
            {children}
          </div>
          {linkText && linkTo && (
            <div className="col-span-full pb-20 md:col-start-2 md:col-span-5 relative">
              <StylisedLink
                type="secondary"
                linkText={linkText}
                linkTo={linkTo}
                onlyBorder
                hoverColour="bg-midnight-blue"
                textColour="text-midnight-blue"
                textHoverColour="group-hover:text-white"
                icon={<ArrowIcon rightArrow width={16} height={19} />}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ArticleItem
