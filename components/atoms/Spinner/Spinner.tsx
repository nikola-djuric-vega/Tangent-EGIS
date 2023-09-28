import React from 'react'
import Image from 'next/image'
import SpinnerImage from '../../../public/images/spinner.png'

interface Props {
  width?: number
  height?: number
}

export default function Spinner({ width = 64, height = 64 }: Props) {
  return (
    <div>
      <Image
        className="animate-spin"
        src={SpinnerImage.src}
        alt="spinner"
        width={width}
        height={height}
      />
    </div>
  )
}
