import router from 'next/router'
import React from 'react'
import { transformUrl } from '../../../utils/helpers'
import Breadcrumb, {
  BreadcrumbItemProps,
} from '../../atoms/Breadcrumb/Breadcrumb'
import Button from '../../atoms/Button/Button'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import RefreshIcon from '../../atoms/icons/Refresh/RefreshIcon'

export interface BasicHeaderProps {
  breadcrumbs: BreadcrumbItemProps[]
  title?: string
  level: number
  endGridLine?: boolean
  threeColumnLayout?: boolean
  filters: React.ReactNode
  customGrids?: Grid[]
}

const FiltersHeader = ({
  breadcrumbs,
  title,
  level,
  endGridLine,
  threeColumnLayout,
  filters,
  customGrids,
}: BasicHeaderProps) => {
  const gridsStandard: Grid[] = [
    {
      desktopStartColumn: 1,
      align: 'right',
      alignMobile: 'right',
    },
  ]

  const threeColumnGrid: Grid[] = [
    {
      align: 'right',
      desktopStartColumn: 1,
      alignMobile: 'right',
    },
    {
      align: 'middle',
      alignMobile: 'right',
      desktopStartColumn: 4,
    },
    {
      align: 'middle',
      alignMobile: 'right',
      desktopStartColumn: 7,
    },
  ]

  return (
    <div className="relative md:pt-5">
      <GridLines
        grids={
          customGrids
            ? customGrids
            : threeColumnLayout
            ? threeColumnGrid
            : gridsStandard
        }
        colour="bg-gray-light"
        endLineDesktop={endGridLine}
      />

      <div className="z-10 relative">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <div className="grid grid-cols-5 gap-x-5 md:grid-cols-10 md:gap-x-10 pt-4 md:pt-10 pb-5 md:pb-6 z-10">
        <div className="align-top z-10 col-span-3 md:col-span-3 lg:col-span-5">
          {title && (
            <Heading level={level} hasGreenFlare>
              {title}
            </Heading>
          )}
        </div>
        {filters && (
          <div className="md:col-start-5 lg:col-start-6 col-span-2 md:col-span-5 ml-auto mt-auto">
            {filters}
          </div>
        )}
      </div>
    </div>
  )
}

export default FiltersHeader
