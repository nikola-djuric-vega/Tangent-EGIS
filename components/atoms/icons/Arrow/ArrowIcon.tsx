import * as React from 'react'

import clsx from 'clsx'

import { theme } from '../../../../tailwind.config'
import { SvgProps } from '../../../../types'

interface Props extends SvgProps {
  backgroundColor?: 'super-lime' | 'teal-blue'
  arrowColor?: string
  rightArrow?: boolean
  opacity?: boolean
  angle?: boolean
}

export default function ArrowIcon({
  width = 46,
  height = 46,
  backgroundColor,
  arrowColor,
  rightArrow = false,
  opacity,
  angle,
  ...props
}: Props) {
  return (
    <div
      className={clsx(
        'rounded-full flex items-center justify-center bg-opacity-0 transition duration-500 ease-out hover:bg-transparent border-2 box-content border-transparent',
        {
          'bg-super-lime bg-opacity-100 p-4 hover:border-super-lime':
            backgroundColor === 'super-lime',
          'bg-teal-blue bg-opacity-20 p-4 hover:border-teal-blue hover:border-opacity-40':
            backgroundColor === 'teal-blue',
        }
      )}
      style={{ width: width, height: height }}
    >
      <svg
        className={clsx(
          'transform flex justify-center items-center w-full h-full',
          rightArrow ? 'rotate-180' : angle ? 'rotate-135' : 'rotate-0'
        )}
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M4.58 3.695h8.92v2.596l-8.92.014L7.29 10H4.166L.5 4.993 4.166 0 7.29.013 4.58 3.695z"
          fill={arrowColor ? arrowColor : theme.colors['midnight-blue']}
        />
      </svg>
    </div>
  )
}
