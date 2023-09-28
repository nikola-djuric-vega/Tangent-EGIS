import React from 'react'
import { SvgProps } from '../../../../types'

interface RefreshIconProp {
  arrowColor?: string
}
export default function RefreshIcon({
  width = 13,
  height = 10,
  arrowColor = '#09212C',
  ...props
}: SvgProps & RefreshIconProp) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m8.085 5.891 1.655.375 1.639 1.94.483-2.013-2.345-2.769-3.202 1.437-.437 2.023 2.207-.993Z"
        fill={arrowColor}
      />
      <path
        d="M5.027 1c-.768 0-1.52.218-2.168.63a4.008 4.008 0 0 0-1.486 1.688 3.976 3.976 0 0 0 .582 4.268A4.03 4.03 0 0 0 3.84 8.822a4.054 4.054 0 0 0 2.258.034 4.032 4.032 0 0 0 1.922-1.18A3.989 3.989 0 0 0 9 5.657"
        stroke={arrowColor}
        strokeWidth={1.7}
      />
    </svg>
  )
}
