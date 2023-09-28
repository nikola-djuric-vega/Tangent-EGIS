import React from 'react'
import { SvgProps } from '../../../../types'

export default function QuoteIcon({
  width = 36,
  height = 27,
  ...props
}: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M13.68 26.4l3.16-26H6.4L0 26.4h13.68zm19.12 0l3.16-26H25.52l-6.4 26H32.8z"
        fill="#D5F311"
      />
    </svg>
  )
}
