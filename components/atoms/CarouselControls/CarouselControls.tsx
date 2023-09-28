import React from 'react'
import ArrowIcon from '../icons/Arrow/ArrowIcon'
import clsx from 'clsx'

interface Props {
  id: string
  disableLeft?: boolean
  disableRight?: boolean
  stackedMobile?: boolean
}

const CarouselControls = ({
  id,
  disableLeft,
  disableRight,
  stackedMobile,
}: Props) => {
  return (
    <div
      className={clsx(
        'inline-flex gap-3',
        stackedMobile ? 'flex-col md:flex-row-reverse' : 'flex-row-reverse'
      )}>
      <button
        className={`forward-${id}`}
        data-testid="forwardButton"
        disabled={disableRight}>
        <ArrowIcon
          rightArrow
          backgroundColor={disableRight ? 'teal-blue' : 'super-lime'}
          width={14}
          height={14}
        />
      </button>
      <button
        className={`back-${id}`}
        data-testid="backButton"
        disabled={disableLeft}>
        <ArrowIcon
          opacity
          backgroundColor={disableLeft ? 'teal-blue' : 'super-lime'}
          width={14}
          height={14}
        />
      </button>
    </div>
  )
}

export default CarouselControls
