import React from 'react'

interface StatisticItemProps {
  title: string
  subtitle: string
  introText: string
}

const StatisticItem = ({ title, subtitle, introText }: StatisticItemProps) => {
  return (
    <div className="flex flex-col">
      <span className="h2 md:h4 text-white">{title}</span>
      <span className="h5 md:h6 text-super-lime">{subtitle}</span>
      <p className="body3 text-white md:pt-3">{introText}</p>
    </div>
  )
}

export default StatisticItem
