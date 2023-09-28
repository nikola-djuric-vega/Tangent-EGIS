import clsx from 'clsx'
import React from 'react'

interface Props {
  scrollPos: number
  width?: number
  backgroundColour?: string
  scrollColour?: string
}

export default function CustomScrollBar({
  scrollPos,
  width = 20,
  backgroundColour,
  scrollColour,
}: Props) {
  return (
    <div className="block md:hidden col-span-5">
      <div
        className={clsx(
          'h-1 rounded col-span-5 relative',
          backgroundColour ? backgroundColour : 'bg-steel-gray-light'
        )}
      >
        <div
          style={{
            width: `${width}%`,
            left: `${scrollPos}%`,
            transform: `translateX(-${scrollPos}%)`,
          }}
          className={clsx(
            'h-1 rounded absolute',
            scrollColour ? scrollColour : 'bg-blue-320'
          )}
        />
      </div>
    </div>
  )
}
