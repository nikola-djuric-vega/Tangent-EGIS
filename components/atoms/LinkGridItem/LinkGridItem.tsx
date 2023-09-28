import React from 'react'
import Image from 'next/image'
import ArrowIcon from '../icons/Arrow/ArrowIcon'
import clsx from 'clsx'
import { Media } from '../../../types/CMS'

interface LinkGridItemProps {
  image?: Media
  title?: string
  subTitle?: string
  buttonText?: string
  showLink?: boolean
}

const LinkGridItem = ({
  image,
  title,
  subTitle,
  buttonText,
  showLink,
}: LinkGridItemProps) => {
  return (
    <div
      className={clsx('grid grid-cols-5 md:flex flex-row relative h-full', {
        'cursor-pointer': showLink,
      })}
    >
      <div className="h-full col-span-2 md:w-2/4 flex flex-col justify-center">
        {image?.umbracoFile?.url && (
          <>
            {image.blur_url && (
              <Image
                src={image.umbracoFile.url}
                layout="responsive"
                height="168"
                width="168"
                objectFit="cover"
                blurDataURL={image.blur_url}
                placeholder="blur"
                alt={image.umbracoAlternateText || image.name}
              />
            )}
          </>
        )}
      </div>
      <div className="col-span-3 flex flex-col ml-4 md:mt-5 md:w-2/4 my-2 md:my-0">
        <div className="max-w-full flex flex-col">
          {title && <span className="h6">{title}</span>}
          {subTitle && <span className="body4">{subTitle}</span>}
        </div>

        {showLink && buttonText && (
          <span className="cta text-midnight-blue mt-auto flex items-center">
            {buttonText}
            <span className="ml-3">
              <ArrowIcon rightArrow width={16} height={20} />
            </span>
          </span>
        )}
      </div>
    </div>
  )
}

export default LinkGridItem
