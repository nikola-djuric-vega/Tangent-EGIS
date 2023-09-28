import React from 'react'
import { theme } from '../../../../tailwind.config'
import { SvgProps } from '../../../../types'

interface Props extends SvgProps {
  color?: string
}

export default function ChevronIcon({
  width = 10,
  height = 7,
  color = theme.colors['midnight-blue'],
  ...props
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M9.585 3.072V0L4.786 3.42.013 0 0 3.072l4.786 3.606 4.799-3.606z"
        fill={color}
      />
    </svg>
  )
}
