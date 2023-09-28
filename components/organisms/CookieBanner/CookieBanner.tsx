import clsx from 'clsx'
import React from 'react'
import Button from '../../atoms/Button/Button'

interface CookieBannerProps {
  cookieText: string
  agreeButtonText: string
  denyButtonText: string
  handleAgree(): void
  handleDeny(): void
  visible: boolean
}

export default function CookieBanner({
  cookieText,
  agreeButtonText,
  denyButtonText,
  handleAgree,
  handleDeny,
  visible,
}: CookieBannerProps) {
  return (
    <div
      className={clsx(
        'fixed bottom-0 right-0 left-0 w-screen bg-midnight-blue z-100',
        !visible && 'hidden'
      )}
    >
      <div className="container py-10 md:py-16">
        <div className="grid grid-cols-5 md:grid-cols-10 md:gap-x-10 gap-x-5">
          <div className="md:col-start-2 md:col-span-6 col-start-1 col-span-full">
            <div
              className="prose prose-light"
              dangerouslySetInnerHTML={{ __html: cookieText }}
            />
          </div>
          <div className="md:col-start-8 md:col-span-2 col-start-1 col-span-full mt-4 md:mt-0 flex flex-col justify-end space-y-4">
            <Button
              onClick={() => handleAgree()}
              type="primary"
              buttonText={agreeButtonText}
              backgroundColour="bg-super-lime"
              textColour="text-midnight-blue"
            />
            <Button
              onClick={() => handleDeny()}
              type="primary"
              onlyBorderWhite
              buttonText={denyButtonText}
              textColour="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
