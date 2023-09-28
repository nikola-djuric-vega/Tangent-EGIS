import clsx from 'clsx'

import React from 'react'
import { FormattedMessage } from 'react-intl'

interface TagLine {
  additionalInfo?: string
  time?: string | number
  removeMargin?: boolean
  fontColor?: 'text-midnight-blue' | 'text-steel-gray-lightest'
  date?: string
  moreInfo?: string
}

const TagLine = ({
  additionalInfo,
  time,
  removeMargin,
  fontColor = 'text-midnight-blue',
  date,
  moreInfo,
}: TagLine) => {
  return (
    <div className={clsx('tag', !removeMargin && 'mt-5 sm:mt-6')}>
      {additionalInfo && (
        <>
          <span className={`${fontColor} font-sans uppercase`}>
            {additionalInfo}
          </span>
          <span className="text-egis-green text-base"> &bull;</span>
        </>
      )}

      {time && (
        <>
          <span className="uppercase">
            {' '}
            <FormattedMessage
              defaultMessage="{duration} Mins"
              description="Word for minutes"
              values={{ duration: time }}
            />
          </span>
          <span className="text-egis-green text-base"> &bull;</span>
        </>
      )}
      {date && (
        <>
          <span> {date}</span>
        </>
      )}

      {moreInfo && (
        <>
          <span className="text-egis-green text-base"> &bull;</span>
          <span> {moreInfo}</span>
        </>
      )}
    </div>
  )
}

export default TagLine
