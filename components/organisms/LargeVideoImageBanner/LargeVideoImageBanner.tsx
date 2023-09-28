import GridLines, { Grid } from '../../atoms/GridLines/GridLines'

import SocialLinks from '../../molecules/SocialLinks/SocialLinks'
import isEmpty from 'lodash/isEmpty'
import VideoOverlay from '../../molecules/VideoOverlay/VideoOverlay'

const gridLines: Grid[] = [
  {
    desktopStartColumn: 9,
    mobileStartColumn: 3,
    align: 'middle',
    alignMobile: 'right',
  },
]
export interface LargeImageBannerProps {
  videoUrl?: string
  image?: string
  blurImageUrl?: string
  caption?: string
  shareText: string
  socialLinks: object
  imageAltText: string
}

const LargeVideoImageBanner = ({
  videoUrl,
  image,
  blurImageUrl,
  caption,
  shareText,
  socialLinks,
  imageAltText,
}: LargeImageBannerProps) => {
  return (
    <div className="relative">
      <GridLines grids={gridLines} endLineMobile endLineDesktop />
      <div className="grid grid-cols-5 gap-x-5 sm:grid-cols-10 sm:gap-x-10 relative">
        <div className="z-10 align-top col-span-full md:col-span-8 content-center max-h-screen relative -ml-10 md:-ml-20 md:-mr-5 overflow-hidden">
          {image && (
            <div className="relative h-full ">
              <VideoOverlay
                imageAltText={imageAltText}
                supportingText={caption}
                videoUrl={videoUrl!}
                image={image}
                blurImageUrl={blurImageUrl}
                showPlayIcon={!!videoUrl}
              />
            </div>
          )}
        </div>
        <div className="inline-grid z-10 py-4 md:py-0 col-span-full md:col-span-2 md:align-top  md:content-start md:place-content-center md:pr-10">
          {!isEmpty(socialLinks) && (
            <SocialLinks
              variant="vertical"
              text={shareText}
              theme="dark"
              socialLink={socialLinks}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default LargeVideoImageBanner
