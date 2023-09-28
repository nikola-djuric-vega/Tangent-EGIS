import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Image from 'next/image'
import SocialLinks from '../../molecules/SocialLinks/SocialLinks'
import { Media } from '../../../types/CMS'
import VideoOverlay from '../../molecules/VideoOverlay/VideoOverlay'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'

interface NarrowVideoImageBannerProps {
  image?: Media
  introBlock: React.ReactNode
  shareText?: string
  socialLinks?: any[]
  videoUrl?: string
  link?: { name: string; url: string }
  title?: string
  subTitle?: string
  role?: string
  location?: string
  text?: React.ReactNode
}

const NarrowVideoImageBanner = ({
  image,
  introBlock,
  shareText,
  socialLinks,
  videoUrl,
  link,
  title,
  subTitle,
  role,
  location,
  text,
}: NarrowVideoImageBannerProps) => {
  const gridLines: Grid[] = [
    {
      desktopStartColumn: 6,
      align: 'right',
      alignMobile: 'right',
    },
    {
      mobileStartColumn: 3,
      align: 'right',
      alignMobile: 'right',
    },
  ]

  return (
    <div className="relative z-10 pb-10 md:pb-0">
      <GridLines grids={gridLines} endLineMobile />
      <div className="grid grid-cols-5 md:grid-cols-10 inset-0 gap-x-5 md:gap-x-10">
        <div className="col-span-10 md:col-span-5 z-100">
          <div className="sticky inset-0 -ml-5 -mr-5 2xl:-ml-20 2xl:-mr-10">
            {!!videoUrl ? (
              <div className="relative w-full">
                <VideoOverlay
                  imageAltText={image?.umbracoAlternateText! || image?.name!}
                  videoUrl={videoUrl}
                  image={image?.umbracoFile?.narrow_banner_url}
                  blurImageUrl={image?.blur_url}
                  showPlayIcon={!!videoUrl}
                />
              </div>
            ) : (
              <>
                {image?.umbracoFile?.narrow_banner_url && image.blur_url && (
                  <Image
                    priority
                    src={image.umbracoFile.narrow_banner_url}
                    alt={image?.umbracoAlternateText || image.name}
                    width="1047"
                    height="740"
                    blurDataURL={image.blur_url}
                    placeholder="blur"
                  />
                )}
              </>
            )}
          </div>
        </div>
        <div className="col-span-10 md:col-start-7 md:col-span-4 md:-ml-10 md:mb-12 mt-8 md:mt-0">
          <div className="flex flex-col md:mb-10">
            {!!title && <span className="tag mt-5 md:mt-0">{title}</span>}
            {!!subTitle && <span className="h4 mt-1">{subTitle}</span>}
            {!!role && <span className="body1 -mt-1">{role}</span>}
            {!!location && <span className="body4">{location}</span>}
          </div>
          {introBlock}
          {link && link.name && link.url && (
            <div className="md:mt-8 md:mb-12 my-7">
              <StylisedLink
                type="primary"
                linkText={link.name}
                linkTo={link.url}
                backgroundColour="bg-super-lime"
                hoverColour="bg-midnight-blue"
                textColour="text-midnight-blue"
                textHoverColour="group-hover:text-super-lime"
                icon={<ArrowIcon rightArrow width={16} height={20} />}
              />
            </div>
          )}
          {!!text && text}
          {shareText && !!socialLinks?.length && (
            <div className="pt-5 pb-8 md:pt-7 md:pb-14">
              <SocialLinks
                variant="horizontal"
                text={shareText}
                theme="dark"
                socialLink={socialLinks}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NarrowVideoImageBanner
