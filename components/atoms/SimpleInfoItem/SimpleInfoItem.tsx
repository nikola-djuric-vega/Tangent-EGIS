import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'

interface SimpleInfoProps {
  title: string
  children: React.ReactNode
}

const SimpleInfoItem = ({ title, children }: SimpleInfoProps) => {
  const gridLines: Grid[] = [
    {
      desktopStartColumn: 4,
      mobileStartColumn: 3,
      align: 'right',
      alignMobile: 'right',
    },
  ]

  return (
    <div className="relative">
      <GridLines grids={gridLines} endLineDesktop endLineMobile />
      <div className="relative text-midnight-blue grid grid-cols-5 gap-5 sm:grid-cols-10 sm:gap-10">
        <h1 className="col-span-5 font-extrabold text-lg tracking-tight leading-tight sm:py-11 sm:col-span-3 sm:pl-8">
          {title}
        </h1>
        {children}
      </div>
      <div className="h-2 bg-super-lime w-full relative" />
    </div>
  )
}

export default SimpleInfoItem
