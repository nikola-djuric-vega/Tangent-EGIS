import React, { useRef } from 'react'
import ChevronIcon from '../icons/Chevron/ChevronIcon'
import Heading from '../Heading/Heading'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { theme } from '../../../tailwind.config'
import CloseIcon from '../icons/Close/CloseIcon'

export interface FilterProps {
  title: string
  optionGroups: { title?: string; options: Option[] }[]
  selected?: string
  setSelected(value: string, type: string): void
  isDropdownOpen: boolean
  setIsOpen(type: string, open: boolean): void
  inDropdown?: boolean
  type: string
  removeSelected(value: string, type: string): void
}

interface Option {
  label: string
  value: string
}

const Filter = ({
  title,
  optionGroups,
  selected,
  setSelected,
  inDropdown,
  isDropdownOpen,
  setIsOpen,
  type,
  removeSelected,
}: FilterProps) => {
  const closeButton = useRef<any>()

  function handleClickOption(option: { value: string; label: string }) {
    setSelected(type === 'order' ? option.value : option.label, type)
    setIsOpen(type, false)
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    option?: Option,
    isLastOption?: boolean
  ) => {
    if (e.key === 'Escape') {
      setIsOpen(type, false)
    }
    if (e.key === 'Enter' && option) {
      handleClickOption(option)
    }
    if (e.key === 'Tab' && isLastOption && inDropdown && closeButton?.current) {
      closeButton.current.focus()
    }
  }

  const getSelected = (selected: string) => {
    if (selected === 'asc') return 'Oldest'
    if (selected === 'desc') return 'Newest'
    return selected
  }

  function handleCloseButton(value: string, label: string) {
    removeSelected(type === 'order' ? value : label, type)
    setIsOpen(type, false)
  }

  return (
    <div className="md:relative md:mt-0 mt-5">
      <button
        data-testid="dropdown-btn"
        onClick={() => setIsOpen(type, !isDropdownOpen)}
        className={clsx(
          'cursor-pointer',
          inDropdown && 'mx-6 md:mx-0 py-4 md:py-0'
        )}
      >
        <div
          className={clsx(
            'flex items-center mr-4',
            selected && 'border-b-3 border-super-lime'
          )}
        >
          <span className="cta mr-3">
            {selected && inDropdown ? getSelected(selected) : title}
          </span>
          <ChevronIcon
            className={clsx('transition-transform duration-400 ease-in-out', {
              'transform rotate-0': !isDropdownOpen,
              'transform rotate-180': isDropdownOpen,
            })}
          />
        </div>
      </button>
      <Transition show={isDropdownOpen}>
        <Transition.Child
          enter={isDropdownOpen ? 'transition duration-300 ease-in-out' : ''}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave={isDropdownOpen ? 'transition duration-300 ease-in-out' : ''}
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="relative z-10"
        >
          <div
            data-testid="dropdown-options"
            className={clsx(
              'flex flex-col bg-white md:border md:border-t-3 py-2 border-gray md:border-t-super-lime md:absolute md:right-3 md:-mt-1 w-full md:w-80 md:max-h-96 md:shadow md:overflow-y-scroll',
              {
                'fixed inset-0 overflow-y-scroll': inDropdown,
                'opacity-0': !isDropdownOpen,
                'opacity-100': isDropdownOpen,
              }
            )}
            onKeyDown={handleKeyDown}
          >
            {inDropdown && (
              <>
                <button
                  data-testid="close-btn"
                  className="absolute top-7 right-7"
                  onClick={() => setIsOpen(type, false)}
                  aria-label="Close filter dropdown"
                  ref={closeButton}
                >
                  <CloseIcon
                    width={24}
                    height={24}
                    colour={theme.colors['midnight-blue']}
                  />
                </button>
                <Heading
                  level={6}
                  hasGreenFlare
                  className="pt-16 px-6 pb-5 border-b border-gray-light"
                >
                  {`Filter by ${title.toLowerCase()}`}
                </Heading>
              </>
            )}
            {!!optionGroups &&
              optionGroups.map((optionGroup, index) => {
                const isLastGroup = optionGroups.length === index + 1

                return (
                  <div
                    className={clsx(!isLastGroup && 'mb-8')}
                    key={`listing-${index}`}
                  >
                    {optionGroup.title && (
                      <span className="tag mx-6 pt-4">{optionGroup.title}</span>
                    )}
                    {optionGroup.options.length > 0 &&
                      optionGroup.options
                        .sort((a, b) => a.label.localeCompare(b.label))
                        .map((option, i) => {
                          const isLastOption =
                            optionGroup.options.length === i + 1 && isLastGroup
                          const currentSelected =
                            type === 'order' ? option.value : option.label
                          return (
                            <div className="relative" key={`listing-item-${i}`}>
                              {selected === currentSelected && (
                                <div className="bg-gray-lightest absolute inset-0 mx-3 border-l-4 border-super-lime my-2"></div>
                              )}
                              <div
                                data-testid="option-btn"
                                onKeyDown={(e) =>
                                  handleKeyDown(e, option, isLastOption)
                                }
                                className={clsx(
                                  'body3  relative flex items-center w-full justify-between',
                                  {
                                    'hover:bg-gray-lightest':
                                      selected !== currentSelected,
                                  }
                                )}
                                tabIndex={0}
                              >
                                <div
                                  onClick={() => handleClickOption(option)}
                                  className={clsx(
                                    'mx-6 py-4  cursor-pointer w-full',
                                    optionGroup.options.length !== i + 1 &&
                                      'border-gray-light border-b'
                                  )}
                                >
                                  {option.label}
                                </div>
                                {selected === currentSelected && (
                                  <div className="mr-5">
                                    <div
                                      onClick={() =>
                                        handleCloseButton(
                                          option.value,
                                          option.label
                                        )
                                      }
                                    >
                                      <CloseIcon
                                        width={16}
                                        height={15}
                                        colour={theme.colors['black']}
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )
                        })}
                  </div>
                )
              })}
          </div>
        </Transition.Child>
      </Transition>
    </div>
  )
}

export default Filter
