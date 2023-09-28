import React from 'react'
import { SvgProps } from '../../../../types'

import { theme } from '../../../../tailwind.config'

interface Props extends SvgProps {
  backgroundColor?: string
  playButtonColor?: string
}

export default function VideoPlayIcon({
  width = 70,
  height = 70,
  backgroundColor = theme.colors.black,
  playButtonColor = theme.colors['super-lime'],
  ...props
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle opacity={0.4} cx={35} cy={35} r={35} fill={backgroundColor} />
      <path
        d="M30.242 23.938a1.607 1.607 0 00-1.429-.107c-.463.192-.755.582-.755 1.01V45.16c0 .428.292.818.755 1.01a1.616 1.616 0 001.43-.107l16.38-10.159c.343-.212.545-.547.545-.903s-.202-.69-.546-.903l-16.38-10.159z"
        fill={playButtonColor}
      />
    </svg>
  )
}
