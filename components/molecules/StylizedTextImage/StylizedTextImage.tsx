import Image from 'next/image'
import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import { Media } from '../../../types/CMS'

interface Props {
  image?: Media
  richText: string
  title: string
  optionalLink?: { name: string; url: string; target?: boolean }
}

export default function StylizedTextImage({
  image,
  richText,
  title,
  optionalLink,
}: Props) {
  const gridlines: Grid[] = [
    {
      desktopStartColumn: 1,
      align: 'right',
      alignMobile: 'left',
    },
  ]
  return (
    <div className="relative">
      <GridLines grids={gridlines} />
      <div className="grid grid-cols-1 md:grid-cols-10 kg:gap-10 pt-5 pb-8 md:pt-20 md:pb-20 relative">
        <div className="col-start-1 col-span-full md:col-span-4 relative z-10">
          <div className="object-fill w-full md:pl-5 order-first">
            {image?.umbracoFile?.url && image.blur_url && (
              <Image
                alt={image?.umbracoAlternateText || image?.name}
                className="relative"
                width="780"
                height="780"
                layout="responsive"
                src={image.umbracoFile.url}
                blurDataURL={image.blur_url}
                placeholder="blur"
              />
            )}
          </div>
        </div>
        <div className="hidden md:block col-start-1 md:col-start-4 w-full absolute bg-steel-gray-lightest h-full z-0 border-l border-gray-light md:ml-3" />
        <div className="col-start-1 md:col-start-6 col-span-full">
          <div className="flex flex-col justify-center h-full md:mr-12 relative">
            {title && (
              <Heading className="mt-6 mb-2 md:mt-3 md:mb-5" level={6}>
                {title}
              </Heading>
            )}
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: richText }}
            />
            {!!optionalLink?.name && !!optionalLink?.url && (
              <div className="mt-5">
                <StylisedLink
                  externalLink={optionalLink.target}
                  type="secondary"
                  linkText={optionalLink.name}
                  linkTo={optionalLink.url}
                  onlyBorder
                  hoverColour="bg-midnight-blue"
                  textColour="text-midnight-blue"
                  textHoverColour="group-hover:text-white"
                  icon={<ArrowIcon rightArrow width={17} height={20} />}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
