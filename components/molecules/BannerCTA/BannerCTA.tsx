import React from 'react'
import StylisedLink from '../../atoms/StylisedLink/StylisedLink'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import { motion } from 'framer-motion'
import { ConditionalWrapper, transformUrl } from '../../../utils/helpers'
import Link from 'next/link'

export interface BannerCTAProps {
  number?: string
  title?: string[]
  subheading?: string
  link?: { url: string; name?: string }
  active?: boolean
}

const BannerCTA = ({
  number,
  title,
  subheading,
  link,
  active,
}: BannerCTAProps) => {
  const container = {
    start: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    finish: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const children = {
    start: {
      y: '100%',
      transition: {
        duration: 0.7,
      },
    },
    finish: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  }

  return (
    <ConditionalWrapper
      condition={!!link}
      wrapper={(children: any) => (
        <Link href={transformUrl(link!.url)}>
          <a>{children}</a>
        </Link>
      )}
    >
      <motion.div
        className="grid grid-cols-5 md:grid-cols-10 gap-x-5 md:gap-x-10 relative z-10"
        initial={false}
        animate={active ? 'finish' : 'start'}
        variants={container}
      >
        <div className="col-span-full md:col-span-1 -mt-5">
          {number && (
            <div className="overflow-hidden">
              <motion.p variants={children} className="h6 text-white">
                {number}
              </motion.p>
            </div>
          )}
        </div>
        <div className="col-span-full xl:col-span-6">
          {title && (
            <>
              <h1 className="sr-only">{title.join(' ')}</h1>
              {title.map((line, index) => {
                return (
                  <div className="h1 md:h3 lg:h1 overflow-hidden" key={index}>
                    <motion.div
                      variants={children}
                      className="headingFlare text-white"
                    >
                      {line}
                    </motion.div>
                  </div>
                )
              })}
            </>
          )}
          {subheading && (
            <div className="overflow-hidden">
              <motion.p variants={children} className="body1 text-white">
                {subheading}
              </motion.p>
            </div>
          )}
          {link && (
            <div className="hidden md:block overflow-hidden mt-5">
              <motion.div variants={children}>
                <StylisedLink
                  textColour="text-white"
                  textHoverColour="white"
                  type="tertiary"
                  linkText={link.name ? link.name : 'Read more'}
                  linkTo={link.url}
                  icon={<ArrowIcon rightArrow width={16} height={16} />}
                />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </ConditionalWrapper>
  )
}

export default BannerCTA
