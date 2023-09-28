import React from 'react'
import { theme } from '../../../../tailwind.config'
import { SvgProps } from '../../../../types'

interface Props extends SvgProps {
  colour: string
}

export default function CloseIcon({
  width = 21,
  height = 21,
  colour,
  ...props
}: Props) {
  return (
    <svg
      className="cursor-pointer"
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 18.385L18.385 0l1.767 1.768L1.768 20.152 0 18.386z"
        fill={colour}
      />
      <path
        d="M1.768 0l18.385 18.385-1.768 1.768L0 1.768 1.768 0z"
        fill={colour}
      />
    </svg>
  )
}
