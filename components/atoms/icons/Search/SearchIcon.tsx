import React from 'react'
import { SvgProps } from '../../../../types'
import { theme } from '../../../../tailwind.config'

export default function SearchIcon({
  width = 28,
  height = 28,
  colour,
  ...props
}: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 7c-3.864 3.864-3.864 10.136 0 14 3.864 3.864 10.136 3.864 14 0 3.864-3.864 3.864-10.136 0-14-3.864-3.864-10.136-3.864-14 0zm12.825 12.825a8.247 8.247 0 01-11.663 0 8.241 8.241 0 010-11.663 8.247 8.247 0 0111.663 0 8.241 8.241 0 010 11.663z"
        fill={colour ? colour : theme.colors['midnight-blue']}
      />
      <path
        stroke={colour ? colour : theme.colors['midnight-blue']}
        strokeWidth={2.5}
        d="M20.833 20.582l5.771 5.507"
      />
    </svg>
  )
}
