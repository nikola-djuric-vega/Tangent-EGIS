import clsx from 'clsx'
import React, { cloneElement, useEffect, useState } from 'react'

import tailwindConfig, { theme } from '../../../tailwind.config'

interface Props {
  type: 'primary' | 'secondary' | 'tertiary'
  buttonText?: string
  backgroundColour?: string
  onClick(): void
  smallText?: boolean
  icon?: any
  hoverColour?: string
  textColour?: string
  textHoverColour?: string
  onlyBorder?: boolean
  onlyBorderWhite?: boolean
  active?: boolean
}

export default function Button({
  type,
  buttonText,
  backgroundColour,
  onClick,
  smallText,
  icon,
  hoverColour,
  textColour,
  textHoverColour,
  onlyBorder,
  onlyBorderWhite,
  active,
}: Props) {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)
  const [arrowColor, setArrowColor] = useState<string | any>('')

  useEffect(() => {
    if (textHoverColour && textColour) {
      let stripTextHover = textHoverColour.split('text-').pop()
      let stripTextColour = textColour.split('text-').pop()

      if (isMouseOver) {
        setArrowColor(tailwindConfig.theme.colors[stripTextHover!])
      } else {
        setArrowColor(tailwindConfig.theme.colors[stripTextColour!])
      }
    }
  }, [isMouseOver, textHoverColour, textColour])

  return (
    <button
      data-testid="button-item"
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      onClick={() => onClick()}
      className={clsx(
        'rounded-full inline-flex flex-nowrap whitespace-nowrap items-center justify-center ease-in-out transition duration-500 group cursor-pointer font-extrabold',
        active
          ? 'bg-midnight-blue'
          : isMouseOver && textHoverColour
          ? hoverColour
          : backgroundColour,

        {
          'border-2 border-midnight-blue hover:bg-midnight-blue font-extrabold':
            onlyBorder,
          'bg-white': onlyBorder && !active,
          'border-2 border-white': onlyBorderWhite,
          'py-3.5 px-6': type === 'primary',
          'py-2 px-5': type === 'secondary',
          'border-none bg-opacity-0 p-0': type === 'tertiary',
        }
      )}
    >
      <span
        className={clsx(
          active ? 'text-white' : textColour && textColour,
          textHoverColour && textHoverColour,
          {
            'bg-opacity-0 hover:underline': type === 'tertiary',
            'text-xs': smallText,
          }
        )}
      >
        {buttonText}
      </span>
      {icon && (
        <div className="ml-3">
          {cloneElement(icon, {
            arrowColor: active ? theme.colors['white'] : arrowColor,
          })}
        </div>
      )}
    </button>
  )
}
