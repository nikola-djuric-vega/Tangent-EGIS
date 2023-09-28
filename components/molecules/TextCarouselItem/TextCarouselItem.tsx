import React from 'react'
import QuoteIcon from '../../atoms/icons/Quote/QuoteIcon'

export interface TextCarouselItemProps {
  text: string | React.ReactNode
  author: string
  role: string
  showQuoteIcon?: boolean
}

export default function TextCarouselItem({
  text,
  author,
  role,
  showQuoteIcon,
}: TextCarouselItemProps) {
  return (
    <div className="grid grid-cols-5 grid-x-5">
      {showQuoteIcon && <QuoteIcon />}
      <div className="col-span-full">
        <p className="mt-4 md:my-8 body1 text-2xl md:text-3xl">{text}</p>
      </div>
      <div className="col-span-3 md:col-span-full mt-10 md:mt-0 flex flex-col">
        <span className="h6">{author}</span>
        <span className="body2">{role}</span>
      </div>
    </div>
  )
}
