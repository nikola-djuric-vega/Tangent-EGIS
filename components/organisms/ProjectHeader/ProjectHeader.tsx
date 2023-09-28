import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import Breadcrumb, {
  BreadcrumbItemProps,
} from '../../atoms/Breadcrumb/Breadcrumb'
import Heading from '../../atoms/Heading/Heading'
import Image from 'next/image'
import SocialLinks from '../../molecules/SocialLinks/SocialLinks'
import { isEmpty } from 'lodash'
import { Media } from '../../../types/CMS'

interface ProjectHeaderProps {
  breadcrumbs: BreadcrumbItemProps[]
  title: string
  subTitle: string
  introText: string
  linkText: string
  linkUrl: string
  image?: Media
  socialLinks: object
  shareText: string
}

const ProjectHeader = ({
  breadcrumbs,
  title,
  subTitle,
  introText,
  linkText,
  linkUrl,
  image,
  socialLinks,
  shareText,
}: ProjectHeaderProps) => {
  const gridLines: Grid[] = [
    {
      desktopStartColumn: 5,
      mobileStartColumn: 3,
      align: 'middle',
      alignMobile: 'right',
    },
    {
      desktopStartColumn: 9,
      align: 'middle',
      alignMobile: 'right',
    },
  ]

  return (
    <div className="relative pt-3 md:pt-5 pb-6 md:pb-24">
      <GridLines grids={gridLines} endLineDesktop endLineMobile />
      <div className="z-10">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <div className="grid grid-cols-5 gap-x-5 md:grid-cols-10 md:gap-x-10 md:pt-14 relative">
        <div className="col-span-5 md:col-span-4">
          <Heading hasBlackDot level={5}>
            {title}
          </Heading>
          <div className="body1">{subTitle}</div>

          {image?.umbracoFile?.project_mobile_banner_image && (
            <div className="md:hidden -ml-5 my-3">
              <Image
                alt={image.name}
                src={image.umbracoFile?.project_mobile_banner_image}
                layout="responsive"
                width="483"
                height="222"
              />
            </div>
          )}
          {linkText && linkUrl && (
            <div className="mt-4 md:mt-8 hidden md:inline-grid">
              <StylisedLink
                type="primary"
                linkText={linkText}
                linkTo={linkUrl}
                backgroundColour="bg-super-lime"
                hoverColour="bg-midnight-blue"
                textColour="text-midnight-blue"
                textHoverColour="group-hover:text-super-lime"
                icon={<ArrowIcon rightArrow width={17} height={20} />}
              />
            </div>
          )}
        </div>
        <div className="col-span-5 body1 md:mt-0 mt-5 md:col-span-5 md:-ml-5 md:-mr-5 md:order-none">
          {introText}
        </div>

        {linkText && linkUrl && (
          <div className="mt-5 md:hidden">
            <StylisedLink
              type="primary"
              linkText={linkText}
              linkTo={linkUrl}
              backgroundColour="bg-super-lime"
              hoverColour="bg-midnight-blue"
              textColour="text-midnight-blue"
              textHoverColour="group-hover:text-super-lime"
              icon={<ArrowIcon rightArrow width={17} height={20} />}
            />
          </div>
        )}

        {!isEmpty(socialLinks) && (
          <div className="md:hidden col-span-full py-9 border-b border-gray-light -mx-5">
            <div className="mx-5">
              <SocialLinks
                variant="vertical"
                text={shareText}
                theme="dark"
                socialLink={socialLinks}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectHeader
