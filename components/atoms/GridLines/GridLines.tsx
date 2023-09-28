import React from 'react'
import clsx from 'clsx'

interface Props {
  grids: Grid[]
  colour?: string
  endLineDesktop?: boolean
  endLineMobile?: boolean
  opacity?: string
}

export interface Grid {
  desktopStartColumn?: number
  mobileStartColumn?: number
  align: 'left' | 'middle' | 'right'
  alignMobile: 'left' | 'middle' | 'right'
}

const classes = {
  columnPos: 'sm:border-none relative h-full',
}

const columnStart: { [key: number]: any } = {
  1: 'sm:col-start-1',
  2: 'sm:col-start-2',
  3: 'sm:col-start-3',
  4: 'sm:col-start-4',
  5: 'sm:col-start-5',
  6: 'sm:col-start-6',
  7: 'sm:col-start-7',
  8: 'sm:col-start-8',
  9: 'sm:col-start-9',
  10: 'sm:col-start-10',
}

const columnStartMobile: { [key: number]: any } = {
  1: 'col-start-1',
  2: 'col-start-2',
  3: 'col-start-3',
  4: 'col-start-4',
  5: 'col-start-5',
}

const alignment = {
  left: 'md:-left-10',
  middle: 'md:-left-5',
  right: 'md:left-0',
}

const alignmentMobile = {
  left: '-left-5',
  middle: '-left-2.5 ',
  right: 'left-0',
}

export default function GridLines({
  grids,
  endLineDesktop,
  endLineMobile,
  colour = 'bg-gray-light',
  opacity = 'opacity-100',
}: Props) {
  return (
    <div
      className={clsx(
        'grid grid-cols-5 sm:grid-cols-10 absolute inset-0 h-full gap-5 sm:gap-10 pointer-events-none'
      )}
    >
      {grids.map((grid: Grid, idx: number) => (
        <div
          key={`grid_line_key_item${idx}`}
          className={clsx(
            classes.columnPos,
            grid.desktopStartColumn
              ? columnStart[grid.desktopStartColumn]
              : 'block sm:hidden',
            grid.mobileStartColumn
              ? columnStartMobile[grid.mobileStartColumn]
              : 'hidden sm:block'
          )}
        >
          <div
            className={clsx(
              'h-full w-px absolute',
              colour,
              opacity,
              grid.align && alignment[grid.align],
              grid.alignMobile && alignmentMobile[grid.alignMobile]
            )}
          />
        </div>
      ))}

      {/* Control endLine for desktop */}
      <div className={clsx(endLineDesktop ? 'hidden sm:block' : 'hidden')}>
        <div
          className={clsx('h-full w-px right-0 absolute', colour, opacity)}
        />
      </div>

      {/* Control endLine for mobile */}
      <div className={clsx(endLineMobile ? 'block sm:hidden' : 'hidden')}>
        <div
          className={clsx('h-full w-px right-0 absolute', colour, opacity)}
        />
      </div>
    </div>
  )
}
