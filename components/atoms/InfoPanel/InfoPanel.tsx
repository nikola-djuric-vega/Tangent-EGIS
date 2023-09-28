import React from 'react'

import Heading from '../Heading/Heading'

interface InfoPanelProps {
  title?: string
  children: React.ReactNode
  hLevel?: number
}

const InfoPanel = ({ title, children, hLevel = 4 }: InfoPanelProps) => {
  return (
    <div className="grid grid-cols-1">
      {title && (
        <Heading hasBlackDot level={hLevel}>
          {title}
        </Heading>
      )}
      <div className="mt-2 sm:mt-5">{children}</div>
    </div>
  )
}

export default InfoPanel
