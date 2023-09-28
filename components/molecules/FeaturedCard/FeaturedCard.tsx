import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { ConditionalWrapper, transformUrl } from '../../../utils/helpers'
import { Media } from '../../../types/CMS'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'

export interface FeaturedCardProps {
  linkTo?: string
  tagline?: React.ReactNode
  title?: string
  image?: Media
  subTitle?: string
  description?: string
  hideDetails?: boolean
  featured?: boolean
  index?: number
  height?: number
  width: number
  secondary?: boolean
  showArrow?: boolean
}

const FeaturedCard = ({
  linkTo,
  image,
  title,
  tagline,
  subTitle,
  description,
  hideDetails,
  width,
  height = 384,
  secondary = false,
  showArrow = true,
}: FeaturedCardProps) => {
  const placeholderImage = require('../../../public/images/placeholder.png')
    .default.src

  return (
    <ConditionalWrapper
      condition={!!linkTo}
      wrapper={(children: any) => (
        <Link href={!!linkTo ? transformUrl(linkTo) : ''}>
          <a className="text-midnight-blue font-normal" rel="noreferrer">
            {children}
          </a>
        </Link>
      )}
    >
      {image?.blur_url &&
      image?.umbracoFile?.featured_url &&
      image.umbracoFile?.featured_listing_image &&
      image.umbracoFile?.featured_secondary_listing_image ? (
        <Image
          className="w-full"
          src={
            !secondary
              ? image.umbracoFile.featured_listing_image
              : image.umbracoFile.featured_secondary_listing_image
          }
          alt={image.umbracoAlternateText || image.name}
          width={width}
          height={height}
          layout="responsive"
          blurDataURL={image.blur_url}
          placeholder="blur"
        />
      ) : (
        <Image
          className="w-full"
          src={placeholderImage}
          alt="Placeholder image"
          width={width}
          height={height}
          layout="responsive"
        />
      )}
      <div
        className={clsx(
          'card-text transform-opacity mt-5 mx-5 md:mx-0',
          hideDetails ? 'duration-300 opacity-0' : 'delay-200 duration-700'
        )}
      >
        {!!tagline && <div className="mb-2">{tagline}</div>}
        {title && <p className="h5 mb-1">{title}</p>}
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

export default FeaturedCard
