import Breadcrumb, {
  BreadcrumbItemProps,
} from '../../atoms/Breadcrumb/Breadcrumb'
import React from 'react'

import ArticleTagline from '../../atoms/ArticleTagline/ArticleTagline'
import Heading from '../../atoms/Heading/Heading'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'

export interface ArticleHeaderProps {
  breadcrumbs: BreadcrumbItemProps[]
  title: string
  date: string
  time: React.ReactNode | string
  tag?: string
  type?: string
  isEvent?: boolean
  isWebinar?: boolean
}

const ArticleHeader = ({
  breadcrumbs,
  title,
  date,
  time,
  tag,
  type,
  isEvent,
  isWebinar,
}: ArticleHeaderProps) => {
  const grids: Grid[] = [
    {
      desktopStartColumn: 5,
      mobileStartColumn: 1,
      align: 'middle',
      alignMobile: 'left',
    },
    {
      desktopStartColumn: 9,
      mobileStartColumn: 3,
      align: 'middle',
      alignMobile: 'middle',
    },
  ]
  return (
    <div className="pb-7 pt-3 md:pt-5 relative">
      <GridLines
        grids={grids}
        colour="bg-gray-light"
        endLineDesktop
        endLineMobile
      />
      <div className="z-10 relative">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <div className={`grid grid-cols-5 md:grid-cols-10 gap-x-10 z-10`}>
        <div className="col-span-5 md:col-span-6 md:mt-12 mb-4 z-10">
          <Heading level={4} as={'h1'} hasGreenFlare>
            {title}
          </Heading>
        </div>
        <div className="col-span-6 z-10">
          <ArticleTagline
            date={date}
            time={time}
            type={type}
            tag={tag}
            isEvent={isEvent}
            isWebinar={isWebinar}
          />
        </div>
      </div>
    </div>
  )
}

export default ArticleHeader
