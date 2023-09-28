import clsx from 'clsx'
import Breadcrumb, {
  BreadcrumbItemProps,
} from '../../atoms/Breadcrumb/Breadcrumb'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'

export interface SimpleHeaderProps {
  breadcrumbs: BreadcrumbItemProps[]
  title?: string
  level: number
  description?: string
  endGridLine?: boolean
  grids?: Grid[]
}

const SimpleHeader = ({
  breadcrumbs,
  title,
  level,
  description,
  endGridLine,
  grids = [
    {
      desktopStartColumn: 3,
      mobileStartColumn: 1,
      align: 'middle',
      alignMobile: 'left',
    },
    {
      desktopStartColumn: 6,
      mobileStartColumn: 3,
      align: 'right',
      alignMobile: 'middle',
    },
  ],
}: SimpleHeaderProps) => {
  const gridsDescription: Grid[] = [
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
    <div className="relative pt-3 md:pt-5">
      <GridLines
        grids={description ? gridsDescription : grids}
        colour="bg-gray-light"
        endLineDesktop={endGridLine}
      />
      <div className="z-10 relative">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>

      <div
        className={clsx(
          'relative grid grid-cols-5 gap-x-5 md:grid-cols-10 md:gap-x-10 pb-5 md:py-14',
          !description && 'md:pb-12'
        )}
      >
        <div
          className={clsx(
            'align-top',
            !description
              ? 'col-span-5 md:col-start-2 md:col-span-6'
              : 'col-start-1 col-span-full md:col-span-4'
          )}
        >
          {title && (
            <Heading level={level} hasGreenFlare>
              {title}
            </Heading>
          )}
        </div>
        <div className="col-start-1 md:col-start-5 col-span-5 align-top body1 md:-ml-5 md:-mr-5">
          {description}
        </div>
      </div>
    </div>
  )
}

export default SimpleHeader
