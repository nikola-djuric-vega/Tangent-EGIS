import React from 'react'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'

interface EventDetailProps {
  date?: string
  time?: string
  registerLink?: { url: string; name: string }
}

const EventDetail = ({ date, time, registerLink }: EventDetailProps) => {
  return (
    <div>
      {date && <span className="block h5 mb-1">{date}</span>}
      {time && <span className="block h6">{time}</span>}
      {registerLink && (
        <div className="mt-4">
          <StylisedLink
            type="primary"
            linkText={registerLink.name}
            linkTo={registerLink.url}
            backgroundColour="bg-super-lime"
            hoverColour="bg-midnight-blue"
            textColour="text-midnight-blue"
            textHoverColour="group-hover:text-super-lime"
            icon={<ArrowIcon rightArrow width={17} height={20} />}
          />
        </div>
      )}
    </div>
  )
}

export default EventDetail
