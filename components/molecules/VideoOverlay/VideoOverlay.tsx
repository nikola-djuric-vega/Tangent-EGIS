import React, { useEffect, useState } from 'react'

import VideoImagePlaceHolder from '../../atoms/VideoImagePlaceholder/VideoImagePlaceHolder'

import { Transition } from '@headlessui/react'
import { PortalWithState } from 'react-portal'

import ReactPlayer from 'react-player'
import CloseIcon from '../../atoms/icons/Close/CloseIcon'
import { theme } from '../../../tailwind.config'
import clsx from 'clsx'

interface Props {
  videoUrl: string
  supportingText?: string
  image?: string
  blurImageUrl?: string
  showPlayIcon: boolean
  imageAltText: string
}

export default function VideoOverlay({
  videoUrl,
  supportingText,
  image,
  blurImageUrl,
  showPlayIcon,
  imageAltText,
}: Props) {
  const classes = {
    base: 'transition ease-in-out duration-400 transform',
  }

  const [isLandscape, setIsLandscape] = useState<boolean>(false)

  function handleResize() {
    const orientation: ScreenOrientation = window.screen.orientation

    if (
      orientation?.type === 'landscape-primary' ||
      orientation?.type === 'landscape-secondary'
    ) {
      setIsLandscape(true)
    } else {
      setIsLandscape(false)
    }
  }

  useEffect(() => {
    handleResize()
    window?.screen?.orientation?.addEventListener('change', handleResize)

    return () => window?.removeEventListener('change', handleResize)
  }, [])

  return (
    <>
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, closePortal, isOpen, portal }) => {
          return (
            <React.Fragment>
              {!!image && (
                <VideoImagePlaceHolder
                  imageAltText={imageAltText}
                  showPlayIcon={showPlayIcon}
                  supportingText={supportingText}
                  image={image}
                  blurImageUrl={blurImageUrl}
                  onClickPlay={openPortal}
                />
              )}

              {portal(
                <Transition show={isOpen}>
                  <Transition.Child
                    data-testid="video-player"
                    enter={classes.base}
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave={classes.base}
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="inset-0 fixed z-100"
                  >
                    <div
                      data-testid="close-button"
                      className="h-screen bg-black bg-opacity-90 w-screen relative"
                      onClick={closePortal}
                    >
                      <div
                        className={clsx(
                          'absolute right-5 top-5 lg:right-14 lg:top-14 text-white cursor-pointer z-110',
                          { 'top-4 right-4': isLandscape }
                        )}
                      >
                        <CloseIcon colour={theme.colors['white']} />
                      </div>

                      {!!videoUrl && (
                        <div
                          onClick={closePortal}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div
                            className={clsx(
                              'md:h-5/6',
                              isLandscape
                                ? 'h-screen w-5/6'
                                : 'lg:w-8/12 lg:h-4/6 h-2/6 w-screen'
                            )}
                          >
                            <ReactPlayer
                              playing
                              controls
                              url={videoUrl}
                              width="100%"
                              height="100%"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </Transition.Child>
                </Transition>
              )}
            </React.Fragment>
          )
        }}
      </PortalWithState>
    </>
  )
}
