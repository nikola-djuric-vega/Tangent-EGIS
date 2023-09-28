import BookIcon from '../icons/Book/BookIcon'
import StarIcon from '../icons/Star/StarIcon'
import ClockIcon from '../icons/Clock/ClockIcon'
import React from 'react'

import CalendarIcon from '../icons/Calendar/CalendarIcon'

import { FormattedMessage } from 'react-intl'

interface ArticleTaglineProps {
  date: string
  time: React.ReactNode | string
  type?: string
  tag?: string
  isEvent?: boolean
  isWebinar?: boolean
}

const ArticleTagline = ({
  date,
  time,
  tag,
  type,
  isEvent,
  isWebinar,
}: ArticleTaglineProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0">
      <div className="flex flex-row items-center space-x-3 md:space-x-0">
        <CalendarIcon />
        <span className="mt-0.5 md:pl-1.5 tag">
          {!isEvent && !isWebinar && (
            <FormattedMessage
              description="Phrase for published"
              defaultMessage="Published"
            />
          )}{' '}
          {date}
        </span>
      </div>
      {time && (
        <div className="flex flex-row items-center space-x-3 md:space-x-0 md:ml-5">
          <ClockIcon />
          <span className="mt-0.5 md:pl-1.5 tag">
            {time}{' '}
            {!isEvent && !isWebinar && (
              <FormattedMessage
                description="Phrase for read length"
                defaultMessage="mins read"
              />
            )}
          </span>
        </div>
      )}
      {type && (
        <div className="flex flex-row items-center space-x-3 md:space-x-0 md:ml-5">
          {isEvent ? <StarIcon /> : <BookIcon />}
          <span className="mt-0.5 md:pl-1.5 tag">{type}</span>
        </div>
      )}
      {tag && (
        <div className="flex flex-row items-center space-x-3 md:space-x-0 md:ml-5">
          <BookIcon />
          <span className="mt-0.5 md:pl-1.5 tag">{tag}</span>
        </div>
      )}
    </div>
  )
}

export default ArticleTagline
