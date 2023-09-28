import React from 'react'
import Image from 'next/image'
import VideoPlayIcon from '../icons/Video/VideoPlayIcon'

interface Props {
  image: string
  blurImageUrl?: string
  supportingText?: string
  onClickPlay(): void
  showPlayIcon: boolean
  imageAltText: string
}

export default function VideoImagePlaceHolder({
  image,
  blurImageUrl,
  supportingText,
  onClickPlay,
  showPlayIcon,
  imageAltText,
}: Props) {
  return (
    <>
      <div className="relative">
        {blurImageUrl && (
          <Image
            priority
            src={image}
            alt={imageAltText}
            width="1047"
            height="740"
            objectFit="cover"
            blurDataURL={blurImageUrl}
            placeholder="blur"
            layout="responsive"
          />
        )}
        {showPlayIcon && (
          <div className="absolute inline-flex justify-center items-center inset-0">
            <button
              aria-label="video play button"
              className="cursor-pointer transform hover:scale-75 duration-500 ease-in-out transition"
              onClick={onClickPlay}
            >
              <VideoPlayIcon />
            </button>
          </div>
        )}
      </div>
      {!!supportingText && (
        <div className="md:w-1/2 my-4 md:my-6">
          <span className="body3">{supportingText}</span>
        </div>
      )}
    </>
  )
}
