import React from 'react'
import clsx from 'clsx'
import StatisticItem from '../../atoms/StatisticItem/StatisticItem'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'

interface StatisticsProps {
  title: string
  stats: {
    title: string
    subtitle: string
    introText: string
  }[]
}

const Statistics = ({ title, stats }: StatisticsProps) => {
  const gridLines: Grid[] = [
    {
      mobileStartColumn: 3,
      desktopStartColumn: 4,
      alignMobile: 'right',
      align: 'right',
    },
    {
      desktopStartColumn: 6,
      alignMobile: 'right',
      align: 'right',
    },
    {
      desktopStartColumn: 8,
      alignMobile: 'left',
      align: 'right',
    },
  ]

  return (
    <section
      className="md:half-midnight border-t border-b md:border-t-0 border-gray-light"
      role="contentinfo"
      aria-label={title}
    >
      <div className="md:container md:relative">
        <div className="grid grid-cols-5 md:grid-cols-10 md:gap-10 h-full">
          <div className="container md:no-container col-start-1 col-span-full md:col-span-2 relative md:static pt-10 pb-8 md:pt-20">
            <GridLines grids={gridLines} endLineMobile />
            <div className="relative">
              {title && (
                <Heading level={6} className="md:mt-1" hasBlackDot>
                  {title}
                </Heading>
              )}
            </div>
          </div>
          <div className="col-start-1 md:col-start-3 h-full col-span-full bg-midnight-blue">
            <div className="container md:no-container md:py-0 relative md:static">
              <GridLines
                grids={gridLines}
                colour="bg-teal-blue"
                endLineMobile
              />
              <div className="grid grid-cols-1 gap-x-5 md:grid-cols-8 md:gap-10 relative md:static pt-12 md:pt-20">
                {stats.map((statistic, index) => {
                  const addSpaceBefore = index % 3 === 0
                  return (
                    <div
                      className={clsx(
                        'col-span-2 mb-10 md:mb-24',
                        addSpaceBefore && 'md:col-start-2'
                      )}
                      key={index}
                    >
                      <StatisticItem {...statistic} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Statistics
