import React, { cloneElement, useEffect, useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'

import tailwindConfig from '../../../tailwind.config'
import { checkLocale, transformUrl } from '../../../utils/helpers'
import { dataLayerSend } from '../../../utils/dataLayerSend'

interface Props {
  type: 'primary' | 'secondary' | 'tertiary'
  linkText: string | React.ReactNode
  linkTo: string
  backgroundColour?: string
  smallText?: boolean
  icon?: any
  hoverColour?: string
  textColour?: string
  textHoverColour?: string
  onlyBorder?: boolean
  externalLink?: boolean
  siteLocale?: string
  defaultLocale?: string
}

export default function StylisedLink({
  type,
  linkText,
  linkTo,
  backgroundColour,
  smallText,
  icon,
  hoverColour,
  textColour,
  textHoverColour,
  onlyBorder,
  externalLink = false,
  siteLocale,
  defaultLocale,
}: Props) {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false)
  const [arrowColor, setArrowColor] = useState<string | any>('')
  let hoverModified = 'hover:' + hoverColour
  let stripBackgroundColour = hoverColour ? 'focus:' + hoverColour : ''
  let stripTextHover = textHoverColour
    ? textHoverColour.split('text-').pop()
    : ''

  const handleCTAAnalytics = () => {
    dataLayerSend({
      event: 'cta',
      cta_link: linkTo,
      cta: linkText,
    })
  }

  useEffect(() => {
    if (textHoverColour && textColour) {
      let stripTextColour = textColour.split('text-').pop()
      if (isMouseOver) {
        setArrowColor(tailwindConfig.theme.colors[stripTextHover!])
      } else {
        setArrowColor(tailwindConfig.theme.colors[stripTextColour!])
      }
    }
  }, [isMouseOver])

  return (
    <Link
      href={transformUrl(linkTo, externalLink)}
      locale={checkLocale(siteLocale, defaultLocale)}
      passHref
    >
      <a
        onBlur={() => setIsMouseOver(false)}
        onTouchStart={() =>
          setArrowColor(tailwindConfig.theme.colors[stripTextHover!])
        }
        rel="noreferrer"
        target={externalLink ? '_blank' : undefined}
        href={linkTo}
        data-testid="stylised-link-item"
        onMouseOver={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        onClick={(e) => handleCTAAnalytics()}
        className={clsx(
          'rounded-full inline-flex md:flex-nowrap md:whitespace-nowrap items-center justify-center ease-in-out transition duration-500 group cursor-pointer font-extrabold',
          hoverModified,
          backgroundColour,
          stripBackgroundColour,
          {
            'border-2 border-midnight-blue hover:bg-midnight-blue focus:outline-red':
              onlyBorder,
            'py-3.5 px-6': type === 'primary',
            'py-2 px-5': type === 'secondary',
            'border-none bg-opacity-0 p-0': type === 'tertiary',
          }
        )}
      >
        <span
          className={clsx(
            'text-sm md:text-base',
            textColour && textColour,
            textHoverColour && textHoverColour,
            {
              'bg-opacity-0 hover:underline': type === 'tertiary',
              'text-xs': smallText,
            }
          )}
        >
          {linkText}
        </span>
        {icon && (
          <div className="ml-2 md:ml-3">
            {cloneElement(icon, { arrowColor })}
          </div>
        )}
      </a>
    </Link>
  )
}
