import React from 'react'
import Image from 'next/image'
import VideoPlayIcon from '../icons/Video/VideoPlayIcon'

interface Props {
  videoImage: string
  supportingText?: string
  onClickPlay(): void
}

export default function VideoPlaceholder({
  videoImage,
  supportingText,
  onClickPlay,
}: Props) {
  return (
    <>
      <div className="relative">
        <Image
          className="mb-4 md:mb-6"
          src={videoImage}
          layout="responsive"
          width="1280"
          height="650"
          objectFit="cover"
          objectPosition="center"
        />
        <div className="absolute inline-flex justify-center items-center inset-0">
          <button
            className="cursor-pointer transform hover:scale-75 duration-500 ease-in-out transition"
            onClick={onClickPlay}
          >
            <VideoPlayIcon />
          </button>
        </div>
      </div>
      {!!supportingText && (
        <div className="md:w-1/2">
          <span className="body3 mb-4 md:mb-6">{supportingText}</span>
        </div>
      )}
    </>
  )
}
