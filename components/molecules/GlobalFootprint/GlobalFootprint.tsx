import React from 'react'
import Link from 'next/link'
import Heading from '../../atoms/Heading/Heading'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import { transformUrl } from '../../../utils/helpers'
import { dataLayerSend } from '../../../utils/dataLayerSend'

export interface GlobalFootprintProps {
  linkTo?: {
    name?: string
    url?: string
  }
  image?: any
  title?: string
  description?: string
}

const GlobalFootprint = ({
  linkTo,
  image,
  title,
  description,
}: GlobalFootprintProps) => {
  const handleCTAAnalytics = () => {
    dataLayerSend({
      event: 'cta',
      cta_link: linkTo?.url,
      cta: linkTo?.name,
    })
  }
  return (
    <>
      {image?.url && (
        <img
          className="js-magic-image"
          src={image?.url}
          alt={image.umbracoAlternateText || image.name}
        />
      )}
      {title && (
        <>
          <div className="magic-content">
            <Heading level={3} className="text-white" hasGreenFlare>
              {title}
            </Heading>
            <p className="text-white text-lg font-serif">{description}</p>
          </div>
          <Link href={!!linkTo?.url ? transformUrl(linkTo?.url) : ''} passHref>
            <div className="link" onClick={(e) => handleCTAAnalytics()}>
              <span className="text-white text-sm font-bold">
                {linkTo?.name}
              </span>
              {linkTo?.name && (
                <span className="text-white lg:ml-1">
                  <ArrowIcon
                    width={12}
                    height={12}
                    arrowColor={'white'}
                    rightArrow
                  />
                </span>
              )}
            </div>
          </Link>
        </>
      )}
    </>
  )
}

export default GlobalFootprint
