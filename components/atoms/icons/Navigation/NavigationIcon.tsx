import React from 'react'
import { SvgProps } from '../../../../types'

export default function NavigationIcon({
  width = 24,
  height = 21,
  ...props
}: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path fill="#09212C" d="M0 0h24v2.5H0zM0 9h24v2.5H0zM0 18h24v2.5H0z" />
    </svg>
  )
}
