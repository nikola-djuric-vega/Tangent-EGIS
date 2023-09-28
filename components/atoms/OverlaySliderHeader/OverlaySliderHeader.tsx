import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import Heading from '../Heading/Heading'

interface Props {
  image: any
  title: string
  subtitle: string
  umbracoAlternateText: string
}

export default function OverlaySliderHeader({
  image,
  title,
  subtitle,
  umbracoAlternateText,
}: Props) {
  return (
    <div className="flex flex-row lg:flex-row relative">
      <div className="relative w-full md:w-48">
        {!!image && (
          <Image
            src={image}
            layout="responsive"
            width="166"
            height="166"
            alt={umbracoAlternateText}
            objectFit="cover"
          />
        )}
      </div>
      <div className="flex flex-col ml-2 lg:ml-7 justify-center">
        <span className="h5">{title}</span>
        <div className="body4 md:body2">{subtitle}</div>
      </div>
    </div>
  )
}
