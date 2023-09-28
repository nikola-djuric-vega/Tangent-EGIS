import clsx from 'clsx'
import React from 'react'
import Heading from '../../atoms/Heading/Heading'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'

export interface InformationItem {
  title?: string
  introText?: any
  linkTo?: string | undefined
  image?: string
}

interface FourColumnLayoutProps {
  informationArray: InformationItem[]
}

const FourColumnLayout = ({ informationArray }: FourColumnLayoutProps) => {
  const gridLines: Grid[] = [
    {
      mobileStartColumn: 3,
      alignMobile: 'right',
      desktopStartColumn: 4,
      align: 'right',
    },
    {
      alignMobile: 'left',
      desktopStartColumn: 6,
      align: 'right',
    },
    {
      alignMobile: 'left',
      desktopStartColumn: 8,
      align: 'right',
    },
  ]

  return (
    <div className={'relative md:pb-14'}>
      <GridLines grids={gridLines} endLineMobile endLineDesktop />
      <div
        className={
          'relative fourColumnItemContainer grid grid-cols-5 gap-x-5 pt-10 pb-10 md:grid-cols-10 md:pb-0 md:pt-24 md:gap-x-10 md:gap-y-6'
        }
      >
        {informationArray.map((informationItem, index) => (
          <div
            key={index}
            className={clsx(
              'col-span-5',
              index === 0 ? 'mt-0 md:col-span-3' : 'mt-0 md:col-span-2',
              index !== 0 ? 'col-span-5 mt-8 md:mt-0' : 'mt-0'
            )}
          >
            {informationItem.title && (
              <Heading level={6}>{informationItem.title}</Heading>
            )}
            <div className="mt-2 md:mt-6">
              <div
                className="body3"
                dangerouslySetInnerHTML={{ __html: informationItem.introText }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FourColumnLayout
