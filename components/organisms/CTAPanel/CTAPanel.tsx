import React from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'
import Image from 'next/image'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import clsx from 'clsx'
import { Media } from '../../../types/CMS'
import { useInView, InView } from 'react-intersection-observer'

export interface CTAPanelProps {
  title: string
  image?: Media
  description: string
  bgColor?: 'lightGreen' | 'lightBlue' | 'grey'
  linkText: string
  linkTo: string
  linkType?: 'internal' | 'external'
  animation: boolean
}

const CTAPanel = ({
  title,
  image,
  description,
  bgColor,
  linkText,
  linkTo,
  linkType,
  animation = false,
}: CTAPanelProps) => {
  const grids: Grid[] = [
    {
      desktopStartColumn: 1,
      mobileStartColumn: 3,
      align: 'right',
      alignMobile: 'middle',
    },
    {
      desktopStartColumn: 4,
      align: 'right',
      alignMobile: 'middle',
    },
    {
      desktopStartColumn: 9,
      align: 'right',
      alignMobile: 'middle',
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  })

  return (
    <div className="relative" ref={ref}>
      <GridLines grids={grids} endLineDesktop endLineMobile />
      <div className="grid grid-cols-5 gap-x-5 md:grid-cols-10 md:gap-x-10 relative">
        <div
          data-testid="background-test"
          className={clsx(
            'hidden md:block cta-bg col-start-1 col-end-4 row-start-1 row-end-2 -ml-20 -mr-10 pt-10 pb-16 -z-10',
            {
              'bg-steel-gray-lightest': bgColor === 'lightBlue',
              'bg-super-lime-light': bgColor === 'lightGreen',
              'bg-gray-lightest': bgColor === 'grey',
            }
          )}
        />
        {image?.umbracoFile?.url && image.blur_url && (
          <div
            className={`cta-img md:row-start-1 col-start-1 col-end-6 md:col-end-5 md:row-end-2 -ml-20 -mr-5 pt-3 md:pt-10 md:pb-16`}
          >
            <Image
              layout="responsive"
              src={image.umbracoFile.url}
              alt={image.umbracoAlternateText || image.name}
              width="606"
              height="353"
              blurDataURL={image.blur_url}
              placeholder="blur"
              priority
            />
          </div>
        )}
        <div className="col-span-5 inset-0 relative mt-6 md:pl-32 md:pt-12 md:-ml-5 z-10 md:flex md:flex-col md:justify-center">
          <InView className={clsx(inView ? 'active' : '')}>
            <div
              className={clsx('overflow-hidden', animation && 'ctaTitleBox')}
            >
              {title && (
                <Heading level={2} hasGreenFlare>
                  {title}
                </Heading>
              )}
            </div>
            {description && (
              <div className={clsx('body3', animation && 'ctaDescriptionBox')}>
                {description}
              </div>
            )}
            <div
              className={clsx(
                'mt-2 pb-12 inline-block',
                animation && 'ctaLinkToBox'
              )}
            >
              {linkText && linkTo && (
                <StylisedLink
                  type="tertiary"
                  linkText={linkText}
                  linkTo={linkTo}
                  textColour="text-midnight-blue"
                  textHoverColour="group-hover:text-midnight-blue"
                  icon={
                    <div
                      data-testid="arrow-type"
                      className={clsx(
                        linkType?.toLowerCase() === 'external' &&
                          'transform -rotate-45'
                      )}
                    >
                      <ArrowIcon rightArrow width={13} height={20} />
                    </div>
                  }
                />
              )}
            </div>
          </InView>
        </div>
      </div>
    </div>
  )
}

export default CTAPanel
