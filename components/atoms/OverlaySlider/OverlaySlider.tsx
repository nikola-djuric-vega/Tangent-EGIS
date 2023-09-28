import React, { useState } from 'react'
import CloseIcon from '../icons/Close/CloseIcon'
import { Transition } from '@headlessui/react'
import { theme } from '../../../tailwind.config'

interface Props {
  setIsOpenSlider(visible: boolean): void
  isSliderOpen: boolean
  children: React.ReactNode
}

const classes = {
  base: 'transition ease-in-out duration-300 transform',
}

export default function OverlaySlider({
  isSliderOpen,
  setIsOpenSlider,
  children,
}: Props) {
  return (
    <Transition show={isSliderOpen}>
      <Transition.Child
        enter={classes.base}
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave={classes.base}
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="grid grid-cols-10 gap-10 inset-0 fixed overflow-auto z-100"
      >
        <div
          data-testid="background-btn"
          className="h-screen bg-black bg-opacity-70 w-screen absolute pointer-events-auto"
          onClick={() => setIsOpenSlider(false)}
        />
      </Transition.Child>
      <Transition.Child
        enter={classes.base}
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave={classes.base}
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
        className="grid grid-cols-5 xl:grid-cols-10 xl:gap-10 gap-5 inset-0 fixed overflow-auto ml-5 pointer-events-none z-110"
      >
        <div className="col-start-1 xl:col-start-5 col-span-full bg-white grid grid-cols-1 md:grid-cols-6 md:gap-10 relative">
          <div className="col-start-1 lg:p-20 py-12 md:col-span-full flex flex-col space-y-12 pointer-events-auto overflow-y-scroll h-screen">
            {children}
          </div>
          <div className="absolute top-7 right-7">
            <button
              onClick={() => setIsOpenSlider(false)}
              className="cursor-pointer pointer-events-auto"
            >
              <CloseIcon colour={theme.colors['midnight-blue']} />
            </button>
          </div>
        </div>
      </Transition.Child>
    </Transition>
  )
}
