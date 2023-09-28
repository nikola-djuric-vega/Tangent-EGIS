import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import CountryButtonList from '../../molecules/CountryButtonList/CountryButtonList'

interface ButtonListProps {
  countries: { name: string; url: string }[]
  heading?: string
}

const ButtonList = ({ countries, heading }: ButtonListProps) => {
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
        <CountryButtonList heading={heading} countries={countries} />
      </div>
    </section>
  )
}

export default ButtonList
