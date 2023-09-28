import React from 'react'
import { formatNumber } from '../../../utils/helpers'
import clsx from 'clsx'
import { Transition } from '@headlessui/react'

export interface BannerTimelineItemProps {
  number: number
  title: string
  active?: boolean
  onClick: any
}

const BannerTimelineItem = ({
  number,
  title,
  active = false,
  onClick,
}: BannerTimelineItemProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        'cursor-pointer col-span-2 flex flex-col justify-between h-full',
        active ? 'text-white' : 'text-steel-gray-dark'
      )}
    >
      <div>
        {number && <span className="tag">{formatNumber(number)}.</span>}
        {title && <p className="body3 mt-1">{title}</p>}
      </div>
      <div className="h-1 relative w-full rounded-full overflow-hidden mt-6">
        <div
          className={clsx(
            'w-full bg-teal-blue absolute transition-height duration-400',
            active ? 'h-full opacity-100' : 'h-0 opacity-0'
          )}
        >
          <Transition
            show={active}
            enter="transition-width delay-200 duration-5500 ease-linear transform"
            enterFrom="opacity-0 w-0"
            enterTo="opacity-100 w-full"
            leave="transition-width duration-5500 ease-linear transform"
            leaveFrom="w-full opacity-100"
            leaveTo="w-0 opacity-0"
            className="h-full bg-super-lime relative"
          />
        </div>
      </div>
    </div>
  )
}

export default BannerTimelineItem
