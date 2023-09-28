import React, { useEffect, useState } from 'react'
import Breadcrumb, {
  BreadcrumbItemProps,
} from '../../atoms/Breadcrumb/Breadcrumb'
import Heading from '../../atoms/Heading/Heading'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import PhoneIcon from '../../atoms/icons/Phone/PhoneIcon'

import GoogleMap from '../../molecules/GoogleMap/GoogleMap'

import BingMap from '../../molecules/BingMap/BingMap'
import clsx from 'clsx'
import { mapDirections } from '../../../utils/helpers'

import { FormattedMessage } from 'react-intl'

interface Props {
  breadcrumb: BreadcrumbItemProps[]
  pageTitle?: string
  headline?: string
  address?: string[]
  contactNumber?: string
  latitude?: number
  longitude?: number
  getInTouchLink?: {
    name: string
    url: string
  }
}

export default function MapHeader({
  breadcrumb,
  pageTitle,
  headline,
  address,
  contactNumber,
  latitude = 50,
  longitude = 20,
  getInTouchLink,
}: Props) {
  const [showGoogleMaps, setShowGoogleMaps] = useState(false)
  const [showMap, setShowMap] = useState(false)

  useEffect(() => {
    function checkGoogle() {
      fetch('https://www.google.com', {
        method: 'HEAD',
        mode: 'no-cors',
      }).then(
        () => {
          setShowGoogleMaps(true)
        },
        () => {
          setShowGoogleMaps(false)
        }
      )
    }

    checkGoogle()
  }, [])

  useEffect(() => {
    if (!showGoogleMaps) {
      setTimeout(() => {
        setShowMap(true)
      }, 500)
    }
  }, [showGoogleMaps])

  return (
    <div className="grid xl:grid-cols-10 grid-cols-5 gap-x-5 xl:gap-x-10 h-full">
      <div className="col-span-full xl:col-span-4 xl:mt-5">
        {!!breadcrumb && <Breadcrumb breadcrumbs={breadcrumb} />}
        {!!pageTitle && (
          <Heading level={3} hasGreenFlare className="mt-5 xl:mt-16">
            {pageTitle}
          </Heading>
        )}

        <div className="mt-3 xl:mt-11 flex flex-col space-y-3 xl:space-y-5">
          {!!headline && (
            <span className="text-xl font-sans font-extrabold leading-5 tracking-tight ">
              {headline}
            </span>
          )}
          <div className="flex flex-col">
            {!!address &&
              address.map((address, idx) => {
                return (
                  <span
                    key={`map_header_address_${idx}`}
                    className="text-xl leading-7 font-serif"
                  >
                    {address}
                  </span>
                )
              })}
          </div>

          {address && (
            <div className="xl:py-5">
              <StylisedLink
                externalLink
                type="secondary"
                linkText={
                  (
                    <FormattedMessage
                      description="Phrase for get directions"
                      defaultMessage="Get directions"
                    />
                  ) as any
                }
                linkTo={mapDirections(address, showGoogleMaps)!}
                onlyBorder
                hoverColour="bg-midnight-blue"
                textColour="text-black"
                textHoverColour="group-hover:text-white"
                icon={<ArrowIcon angle={true} width={16} height={12} />}
              />
            </div>
          )}

          {!!contactNumber && (
            <div
              className={clsx('flex items-center', {
                'xl:pb-28 pb-8': !getInTouchLink,
              })}
            >
              <PhoneIcon />
              <span className="ml-4 text-xl leading-7 font-serif">
                {contactNumber}
              </span>
            </div>
          )}
        </div>
        {!!getInTouchLink && (
          <div className="xl:pt-10 xl:pb-12 py-8">
            <StylisedLink
              type="primary"
              linkText={getInTouchLink.name}
              linkTo={getInTouchLink.url}
              backgroundColour="bg-super-lime"
              hoverColour="bg-midnight-blue"
              textColour="text-midnight-blue"
              textHoverColour="group-hover:text-super-lime"
              icon={<ArrowIcon rightArrow width={17} height={20} />}
            />
          </div>
        )}
      </div>

      {typeof latitude === 'number' && typeof longitude === 'number' && (
        <div className="col-start-1 xl:col-start-5 col-span-full -mx-5 xl:mx -0 flex justify-center items-center h-96 xl:h-full">
          {showGoogleMaps ? (
            <GoogleMap lat={latitude} lng={longitude} />
          ) : (
            <>{showMap && <BingMap lat={latitude} lng={longitude} />}</>
          )}
        </div>
      )}
    </div>
  )
}
