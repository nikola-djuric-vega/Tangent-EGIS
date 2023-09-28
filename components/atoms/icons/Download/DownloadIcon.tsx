import React from 'react'
import { theme } from '../../../../tailwind.config'
import { SvgProps } from '../../../../types'

interface Props extends SvgProps {
  width?: number
  height?: number
  colour: string
}

export default function DownloadIcon({
  width = 21,
  height = 21,
  colour,
  ...props
}: Props) {
  return (
    <svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.756 7.548V0h2.077l.01 7.548L9.8 5.254v2.644L5.795 11 1.8 7.898l.01-2.644 2.946 2.294z"
      fill={colour}
    />
    <path stroke={colour} strokeWidth={2} d="M0 13h11.6" />
  </svg>
  )
}