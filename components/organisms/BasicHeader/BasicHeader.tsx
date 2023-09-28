import Breadcrumb, {
  BreadcrumbItemProps,
} from '../../atoms/Breadcrumb/Breadcrumb'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'
import clsx from 'clsx'

export interface BasicHeaderProps {
  breadcrumbs: BreadcrumbItemProps[]
  title?: string
  level: number
  endGridLine?: boolean
  description?: string
  gridLines?: any
  descriptionClass?: string
}

const BasicHeader = ({
  breadcrumbs,
  title,
  level,
  endGridLine,
  description,
  gridLines,
  descriptionClass = 'body3',
}: BasicHeaderProps) => {
  const gridsStandard: Grid[] = [
    {
      desktopStartColumn: 1,
      align: 'right',
      alignMobile: 'right',
    },
  ]

  return (
    <div className="relative pt-5">
      <GridLines
        grids={!!gridLines ? gridLines : gridsStandard}
        colour="bg-gray-light"
        endLineDesktop={endGridLine}
      />
      <div className="z-10 relative">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>

      <div className="grid grid-cols-5 gap-x-5 md:grid-cols-10 md:gap-x-10 py-5 md:py-14 z-10">
        <div
          className={clsx(
            'align-top z-10 col-span-10',
            !description ? 'md:col-span-full' : 'md:col-span-5'
          )}
        >
          {title && (
            <Heading level={level} hasGreenFlare>
              {title}
            </Heading>
          )}
        </div>
        {description && description.length > 0 && (
          <div className="lg:col-start-6 col-start-1 col-span-full mr-5">
            <span className={descriptionClass}>{description}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default BasicHeader
