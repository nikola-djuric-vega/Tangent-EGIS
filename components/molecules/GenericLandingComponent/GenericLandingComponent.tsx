import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DownloadIcon from '../../atoms/icons/Download/DownloadIcon'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import { theme } from '../../../tailwind.config'
import { Media } from '../../../types/CMS'
import { ConditionalWrapper, transformUrl } from '../../../utils/helpers'
import clsx from 'clsx'

import { FormattedMessage } from 'react-intl'

interface GenericLandingComponentProps {
  linkTo: string
  image?: Media
  title?: string
  content?: string
  firstTag?: string
  secondTag?: string | React.ReactNode
  thirdTag?: string | React.ReactNode
  buttonType?: 'download'
  newsItem?: boolean
  linkType?: 'external' | 'internal'
  linkName?: string
}

const GenericLandingComponent = ({
  linkTo,
  linkName,
  image,
  title,
  content,
  firstTag,
  secondTag,
  thirdTag,
  buttonType,
  newsItem,
  linkType,
}: GenericLandingComponentProps) => {
  return (
    <div className={'col-span-full'}>
      <ConditionalWrapper
        condition={!!linkTo}
        wrapper={(children: any) => (
          <Link href={transformUrl(linkTo)} passHref>
            <a href={transformUrl(linkTo)} download={buttonType === 'download'}>
              {children}
            </a>
          </Link>
        )}
      >
        <div className="md:flex md:flex-row mx-5 md:mx-0">
          <div className="w-full md:w-72">
            {image?.umbracoFile?.featured_url && image?.blur_url && (
              <>
                <Image
                  className="w-full object-cover"
                  src={image?.umbracoFile?.featured_url}
                  alt={image.umbracoAlternateText || image.name}
                  width="344"
                  height="255"
                  blurDataURL={image.blur_url}
                  placeholder="blur"
                  priority
                />
              </>
            )}
          </div>
          <div
            className={clsx(
              'flex flex-col flex-1 mt-5 md:ml-10',
              newsItem ? 'mb-5 md:mb-5' : 'justify-center md:mt-0'
            )}
          >
            {(firstTag || secondTag || thirdTag) && (
              <p className="tag">
                {firstTag && <span>{firstTag}</span>}
                {firstTag && secondTag && (
                  <span className="text-egis-green text-base mx-2">&bull;</span>
                )}
                {secondTag && <span>{secondTag}</span>}
                {thirdTag && secondTag && (
                  <span className="text-egis-green text-base mx-2">&bull;</span>
                )}
                {thirdTag && <span>{thirdTag}</span>}
              </p>
            )}
            <p className={'body1'}>{title}</p>
            {content && <p className={'body3'}>{content}</p>}
            {linkTo && (
              <>
                {!newsItem ? (
                  <span className="cta text-midnight-blue flex items-center mt-2">
                    {buttonType === 'download' ? (
                      <FormattedMessage
                        description="Word for download"
                        defaultMessage="Download"
                      />
                    ) : (
                      linkName
                    )}
                    <span className="ml-3">
                      {buttonType === 'download' ? (
                        <DownloadIcon
                          width={14}
                          height={16}
                          colour={theme.colors['midnight-blue']}
                        />
                      ) : (
                        <div
                          data-testid="arrow-type"
                          className={clsx(
                            linkType?.toLowerCase() === 'external' &&
                              'transform -rotate-45'
                          )}
                        >
                          <ArrowIcon width={16} height={14} rightArrow />
                        </div>
                      )}
                    </span>
                  </span>
                ) : (
                  <span
                    className={clsx(
                      'flex justify-end mt-auto md:hidden',
                      linkType?.toLowerCase() === 'external' &&
                        'transform -rotate-45'
                    )}
                  >
                    <ArrowIcon width={16} height={14} rightArrow />
                  </span>
                )}
              </>
            )}
          </div>
        </div>
      </ConditionalWrapper>
    </div>
  )
}

export default GenericLandingComponent
