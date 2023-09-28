import React, { PropsWithChildren } from 'react'
import clsx from 'clsx'

interface HeadingProps {
  level: number
  as?: any
  className?: string
  children?: string | React.ReactNode
  hasGreenFlare?: boolean
  hasWhiteDot?: boolean
  hasBlackDot?: boolean
}

const Heading: React.FC<PropsWithChildren<HeadingProps>> = ({
  level,
  as: Component = `h${level}`,
  hasGreenFlare,
  className,
  hasWhiteDot,
  hasBlackDot,
  ...props
}) => {
  let strHeading: any =
    typeof props.children === 'string' ? props.children?.trim() : props.children
  let addDot = true

  if (strHeading) {
    const lastCharacter = strHeading[strHeading.length - 1]

    if ((strHeading && lastCharacter === '_') || lastCharacter === '.') {
      strHeading = strHeading.slice(0, -1)
    }
    if (lastCharacter === '?' || lastCharacter === '!' || lastCharacter === ':')
      addDot = false
  }

  return (
    <Component {...props} className={clsx(`h${level}`, className && className)}>
      <span className={clsx(hasGreenFlare && 'headingFlare')}>
        {strHeading}
        <span
          className={clsx(
            hasWhiteDot ? 'text-white' : hasBlackDot && 'text-black'
          )}
        >
          {hasWhiteDot && !!strHeading && addDot && '.'}
          {hasBlackDot && !!strHeading && addDot && '.'}
        </span>
      </span>
    </Component>
  )
}

export default Heading
