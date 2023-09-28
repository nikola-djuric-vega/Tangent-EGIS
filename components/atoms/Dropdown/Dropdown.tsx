import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import React, { useState } from 'react'
import ChevronIcon from '../icons/Chevron/ChevronIcon'
import { useField } from 'formik'

export interface DropdownProps {
  options: { label: string; value: string }[]
  change(value: string): void
  placeholder?: string
  hasError?: boolean
  errorMessage?: string
  name: string
}

export type onChangeOption = Option | Option[] | undefined

export interface Option {
  value: string
  label: string
  id?: string
}

export default function Dropdown({
  options,
  hasError,
  errorMessage,
  placeholder,
  change,
  name,
}: DropdownProps) {
  const [field, meta, helpers] = useField(name)

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [option, setOption] = useState<string>('')

  const classes = {
    transformAnimation: 'transition-transform duration-400 ease-in-out',
    opacityAnimation: 'transition duration-400 ease-in-out',
  }

  function handleClickOption(value: string, label: string) {
    setOption(label)
    setIsDropdownOpen(false)
    change(value)
    helpers.setValue(value)
  }

  return (
    <div className="relative w-full">
      <div
        data-testid="dropdown-btn"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={clsx(
          'pb-2 border-b cursor-pointer flex items-center justify-between',
          classes.opacityAnimation,
          hasError ? 'border-red' : 'border-gray-dark',
          {
            'border-opacity-100': !isDropdownOpen,
            'border-opacity-0': isDropdownOpen,
          }
        )}
      >
        <div
          className={clsx(
            'relative h6',
            classes.transformAnimation,
            classes.opacityAnimation,
            {
              'transform -translate-y-8 opacity-75 text-base':
                isDropdownOpen || !!option.length,
            }
          )}
        >
          <span>{placeholder}</span>
        </div>
        <span
          data-testid="label"
          className={clsx('absolute h6', {
            hidden: !option.length,
            'text-red': hasError,
          })}
        >
          {option}
        </span>
        <div
          className={clsx('mr-4', classes.transformAnimation, {
            'transform rotate-0': !isDropdownOpen,
            'transform rotate-180': isDropdownOpen,
          })}
        >
          <ChevronIcon />
        </div>
      </div>

      <Transition show={isDropdownOpen}>
        <Transition.Child
          enter="transition ease-in-out duration-300 transform"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="relative bg-white z-20"
        >
          <div
            data-testid="dropdown-options"
            className={clsx(
              'flex flex-col bg-white border border-gray-darkest absolute w-full',
              classes.opacityAnimation,
              {
                'opacity-0': !isDropdownOpen,
                'opacity-100': isDropdownOpen,
              }
            )}
          >
            {!!options &&
              options.map((option, index) => {
                return (
                  <span
                    data-testid="option-btn"
                    onClick={() =>
                      handleClickOption(option.value, option.label)
                    }
                    className="h6 hover:bg-gray-lightest cursor-pointer p-5"
                    key={`dropdown_item_${index}`}
                  >
                    {option.label}
                  </span>
                )
              })}
          </div>
        </Transition.Child>
      </Transition>
      {hasError && <span className="mt-3 tag text-red">{errorMessage}</span>}
    </div>
  )
}
