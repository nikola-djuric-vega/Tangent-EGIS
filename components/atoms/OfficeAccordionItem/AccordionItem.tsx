import React from 'react'
import Heading from '../Heading/Heading'
import ArrowIcon from '../icons/Arrow/ArrowIcon'

interface Props {
  text: string
  icon?: React.ReactNode
}

export default function AccordionItem({
  text,
  icon = <ArrowIcon rightArrow width={15} height={11} />,
}: Props) {
  return (
    <div className="flex items-center justify-between border-t border-gray py-4 sm:py-6 cursor-pointer">
      <Heading level={6}>{text}</Heading>
      {icon}
    </div>
  )
}
