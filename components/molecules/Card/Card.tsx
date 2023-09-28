import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { ConditionalWrapper, transformUrl } from '../../../utils/helpers'
import { Media } from '../../../types/CMS'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import { debounce } from 'lodash'

export interface CardProps {
  linkTo?: string
  image?: Media
  tagline?: React.ReactNode
  title?: string
  subTitle?: string
  description?: string
  hideDetails?: boolean
  featuredCard?: boolean
  showArrow?: boolean
  contentCarouselItem?: boolean
  setImageHeight?(height: number): void
  tabIndex?: number
}

const Card = ({
  linkTo,
  image,
  title,
  tagline,
  subTitle,
  description,
  hideDetails,
  featuredCard,
  showArrow = true,
  contentCarouselItem = false,
  tabIndex,
  setImageHeight,
}: CardProps) => {
  const imageRef = useRef<HTMLDivElement>(null)

  function handleWindowSizeChange() {
    if (imageRef.current) {
      setImageHeight?.(imageRef.current.clientHeight)
    }
  }

  const debounceWindow = debounce(handleWindowSizeChange, 250)

  useEffect(() => {
    window.addEventListener('resize', debounceWindow)
    handleWindowSizeChange()

    return () => {
      window.removeEventListener('resize', debounceWindow)
    }
  }, [])
  const placeholderImage = require('../../../public/images/placeholder.png')
    .default.src
  return (
    <ConditionalWrapper
      condition={!!linkTo}
      wrapper={(children: any) => (
        <Link href={!!linkTo ? transformUrl(linkTo) : ''}>
          <a
            tabIndex={tabIndex}
            className="text-midnight-blue font-normal"
            rel="noreferrer"
          >
            {children}
          </a>
        </Link>
      )}
    >
      {image?.umbracoFile?.featured_url ? (
        <div ref={imageRef}>
          <Image
            className="w-full"
            src={image.umbracoFile.featured_url}
            alt={image.umbracoAlternateText || image.name}
            width="344"
            height="255"
            layout="responsive"
            blurDataURL={image.blur_url}
            placeholder="blur"
          />
        </div>
      ) : (
        <Image
          className="w-full"
          src={placeholderImage}
          alt="Placeholder image"
          width="344"
          height="255"
          layout="responsive"
        />
      )}
      <div
        className={clsx(
          'card-text transform-opacity mt-5',
          hideDetails ? 'duration-300 opacity-0' : 'delay-200 duration-700',
          {
            'mx-5': featuredCard,
          }
        )}
      >
        {!!tagline && <div className="mb-2">{tagline}</div>}
        {title && <p className="h5 md:h6 mb-1">{title}</p>}
        {subTitle && (
          <p
            className={clsx(
              !!tagline ? 'font-serif text-2xl mb-2' : 'body1 md:body2 mb-2'
            )}
          >
            {subTitle}
          </p>
        )}
        {description && (
          <p className="font-serif mt-1 text-lg leading-7 tracking-wide">
            {description}
          </p>
        )}

        {linkTo && showArrow && (
          <div className="w-full block md:hidden">
            <div className="w-full flex">
              <div className="ml-auto">
                <ArrowIcon rightArrow width={16} height={16} />
              </div>
            </div>
          </div>
        )}
      </div>
    </ConditionalWrapper>
  )
}

export default Card
