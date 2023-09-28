import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import FilterButtons from '../../molecules/FilterButtonList/FilterButtonList'

interface ButtonListProps {
  heading?: string
  buttons: { name: string }[]
}

const FilterButtonList = ({ heading, buttons }: ButtonListProps) => {
  const grids: Grid[] = [
    {
      desktopStartColumn: 4,
      mobileStartColumn: 0,
      align: 'right',
      alignMobile: 'right',
    },
  ]
  return (
    <section className="md:border-b border-gray-light" role="navigation">
      <div className="container relative pt-6 md:pt-10 md:pb-10">
        <GridLines grids={grids} colour="bg-gray-light" />
        <FilterButtons heading={heading} buttons={buttons} />
      </div>
    </section>
  )
}

export default FilterButtonList
