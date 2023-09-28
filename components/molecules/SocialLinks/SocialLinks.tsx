import clsx from 'clsx'
import React from 'react'
import SocialMediaIcon from '../../atoms/icons/SocialMedia/SocialMediaIcon'
import TagLine from '../../atoms/TagLine/TagLine'
import { dataLayerSend } from '../../../utils/dataLayerSend'

import tailwindConfig from '../../../tailwind.config'

type Props = {
  variant?: 'horizontal' | 'vertical' | 'inline-horizontal'
  theme?: 'light' | 'dark'
  text?: string
  socialLink: any
}

export default function SocialLinks({
  variant = 'horizontal',
  theme = 'light',
  text = 'follow global feed',
  socialLink,
}: Props) {
  const handleSocialShareAnalytics = (social: { label: any; to: string }) => {
    dataLayerSend({
      event: 'share',
      title: social?.to?.split('/')?.pop(),
      method: social?.label?.toLowerCase(),
    })
  }

  return (
    <div className="inline-flex justify-between origin-center align-top">
      <div
        className={clsx(
          'flex items-start md:items-center  h-full',
          variant === 'vertical'
            ? 'justify-evenly md:flex-col items-center'
            : 'flex-col md:flex-row'
        )}
      >
        <div
          className={clsx(
            variant === 'vertical' ? 'md:vertical-rl' : 'horizontal-tb'
          )}
        >
          <TagLine
            additionalInfo={text}
            removeMargin
            fontColor={
              theme === 'dark'
                ? 'text-midnight-blue'
                : 'text-steel-gray-lightest'
            }
          />
        </div>

        {variant === 'vertical' && (
          <div
            className={clsx(
              'hidden md:block h-20 w-1 my-5',
              theme === 'dark' ? 'bg-midnight-blue' : 'bg-steel-gray-lightest'
            )}
          />
        )}
        <div
          className={clsx(
            'flex items-center justify-center',
            variant === 'vertical'
              ? 'md:flex-col space-x-8 md:space-y-8 md:space-x-0 ml-5 md:ml-0'
              : 'flex-row md:ml-8 space-x-7 mt-2 md:mt-0'
          )}
        >
          {socialLink.map((social: { label: any; to: string }, idx: number) => (
            <a
              key={`social_link_${idx}`}
              href={social.to}
              target="_blank"
              rel="noreferrer"
              aria-label={`share to ${social.label}`}
              onClick={(e) => handleSocialShareAnalytics(social)}
            >
              <div className="font-sans">
                <SocialMediaIcon
                  type={social.label.toLowerCase()}
                  color={
                    theme === 'dark'
                      ? tailwindConfig.theme.colors['midnight-blue']
                      : tailwindConfig.theme.colors['white']
                  }
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
