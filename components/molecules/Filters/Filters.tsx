import React, { useState } from 'react'
import Filter, { FilterProps } from '../../atoms/Filter/Filter'
import ChevronIcon from '../../atoms/icons/Chevron/ChevronIcon'
import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import { useRouter } from 'next/router'
import Button from '../../atoms/Button/Button'
import { transformUrl } from '../../../utils/helpers'
import RefreshIcon from '../../atoms/icons/Refresh/RefreshIcon'
import omit from 'lodash/omit'

interface FiltersProps {
  resetLabel?: string
  url?: string
  filters?: {
    title: string
    optionGroups: {
      title?: string
      options: { label: string; value: string }[]
    }[]
    type: string
  }[]
}

const Filters = ({ filters, url, resetLabel = 'Reset' }: FiltersProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [isProjectOpen, setProjectOpen] = useState<boolean>(false)
  const [isServicesOpen, setServicesOpen] = useState<boolean>(false)
  const [isOrderOpen, setOrderOpen] = useState<boolean>(false)
  const [isSectorOpen, setSectorOpen] = useState<boolean>(false)
  const [isLocationOpen, setLocationOpen] = useState<boolean>(false)
  const [isTypeOpen, setTypeOpen] = useState<boolean>(false)
  const router = useRouter()

  const classes = {
    transformAnimation: 'transition-transform duration-400 ease-in-out',
    opacityAnimation: 'transition duration-400 ease-in-out',
  }

  const handleQuery = () => {
    const path = router.asPath.split('?')[0]
    const query = router.query
    delete query.slug
    return { path, query }
  }

  const addToUrl = (type: string, value: string) => {
    const { path, query } = handleQuery()
    delete query.page
    query[type] = value
    router.push({
      pathname: path,
      query: query,
    })
  }

  const removeFromUrl = (type: string, value: string) => {
    const { path, query } = handleQuery()
    delete query.page
    query[type] = value

    const activeParams = omit(query, type)

    router.push({
      pathname: path,
      query: activeParams,
    })
  }

  const setSelected = (value: string, type: string) => {
    addToUrl(type, value)
  }

  const removeSelected = (value: string, type: string) => {
    removeFromUrl(type, value)
  }

  const getSelectedByType = (type: string) => {
    if (router?.query[type]) return router.query[type] as string
  }

  const setDropdownOpen = (type: string, isOpen: boolean) => {
    switch (type) {
      case 'project':
        setSectorOpen(false)
        setLocationOpen(false)
        setTypeOpen(false)
        setServicesOpen(false)
        setOrderOpen(false)
        setProjectOpen(isOpen)
        break
      case 'sector':
        setProjectOpen(false)
        setLocationOpen(false)
        setTypeOpen(false)
        setServicesOpen(false)
        setOrderOpen(false)
        setSectorOpen(isOpen)
        break
      case 'location':
        setProjectOpen(false)
        setSectorOpen(false)
        setTypeOpen(false)
        setServicesOpen(false)
        setOrderOpen(false)
        setLocationOpen(isOpen)
        break
      case 'type':
        setProjectOpen(false)
        setSectorOpen(false)
        setLocationOpen(false)
        setServicesOpen(false)
        setOrderOpen(false)
        setTypeOpen(isOpen)
        break
      case 'service':
        setProjectOpen(false)
        setSectorOpen(false)
        setLocationOpen(false)
        setTypeOpen(false)
        setOrderOpen(false)
        setServicesOpen(isOpen)
        break
      case 'order':
        setProjectOpen(false)
        setSectorOpen(false)
        setLocationOpen(false)
        setTypeOpen(false)
        setServicesOpen(false)
        setOrderOpen(isOpen)
        break
    }
    const header = document.querySelector('header')
    if (isOpen) {
      header?.classList.remove('z-100')
    } else {
      header?.classList.add('z-100')
    }
  }

  const getIsOpenByType = (type: string) => {
    switch (type) {
      case 'project':
        return isProjectOpen
      case 'sector':
        return isSectorOpen
      case 'location':
        return isLocationOpen
      case 'type':
        return isTypeOpen
      case 'service':
        return isServicesOpen
      case 'order':
        return isOrderOpen
      default:
        return false
    }
  }

  return (
    <>
      {filters && filters.length > 0 && (
        <>
          <div className="relative hidden md:flex md:items-center md:space-x-5">
            {url && (
              <Button
                onClick={() =>
                  router.replace(transformUrl(url), undefined, {
                    shallow: true,
                  })
                }
                type="secondary"
                buttonText={resetLabel}
                onlyBorder
                hoverColour="bg-midnight-blue"
                textColour="text-midnight-blue"
                textHoverColour="group-hover:text-white"
                icon={<RefreshIcon />}
              />
            )}
            {filters.map((filter, index) => {
              return (
                <Filter
                  removeSelected={removeSelected}
                  {...filter}
                  key={`filter_${index}`}
                  setSelected={setSelected}
                  selected={getSelectedByType(filter.type)}
                  isDropdownOpen={getIsOpenByType(filter.type)}
                  setIsOpen={setDropdownOpen}
                />
              )
            })}
          </div>
          <div className="md:hidden">
            {filters.length === 1 ? (
              filters.map((filter, index) => {
                return (
                  <>
                    <Filter
                      removeSelected={removeSelected}
                      {...filter}
                      key={`filter_${index}`}
                      setSelected={setSelected}
                      selected={getSelectedByType(filter.type)}
                      isDropdownOpen={getIsOpenByType(filter.type)}
                      setIsOpen={setDropdownOpen}
                    />
                    {url && (
                      <div className="md:mt-0 mt-5">
                        <Button
                          onClick={() =>
                            router.replace(transformUrl(url), undefined, {
                              shallow: true,
                            })
                          }
                          type="secondary"
                          buttonText={resetLabel}
                          onlyBorder
                          hoverColour="bg-midnight-blue"
                          textColour="text-midnight-blue"
                          textHoverColour="group-hover:text-white"
                          icon={<RefreshIcon />}
                        />
                      </div>
                    )}
                  </>
                )
              })
            ) : (
              <>
                <button
                  data-testid="dropdown-btn"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="pb-1 cursor-pointer flex items-center"
                >
                  <span className="cta mr-3">Filters</span>
                  <ChevronIcon
                    className={clsx('mr-4', classes.transformAnimation, {
                      'transform rotate-0': !isDropdownOpen,
                      'transform rotate-180': isDropdownOpen,
                    })}
                  />
                </button>
                <Transition show={isDropdownOpen}>
                  <Transition.Child
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="relative z-10"
                  >
                    <div
                      data-testid="dropdown-options"
                      className={clsx(
                        'flex flex-col bg-white border-gray-lightest border-t md:border md:border-t-3 py-2 border-gray md:border-t-super-lime absolute top-5 -right-4 w-screen md:w-80 shadow overflow-y-scroll max-h-screen',
                        classes.opacityAnimation,
                        {
                          'opacity-0': !isDropdownOpen,
                          'opacity-100': isDropdownOpen,
                        }
                      )}
                    >
                      {filters.length > 0 &&
                        filters.map((filter, index) => {
                          return (
                            <Filter
                              removeSelected={removeSelected}
                              {...filter}
                              key={`filter_${index}`}
                              inDropdown
                              setSelected={setSelected}
                              selected={getSelectedByType(filter.type)}
                              isDropdownOpen={getIsOpenByType(filter.type)}
                              setIsOpen={setDropdownOpen}
                            />
                          )
                        })}
                      <div className="border-t border-gray-light container">
                        <div className="my-5">
                          {url && (
                            <Button
                              onClick={() =>
                                router.replace(transformUrl(url), undefined, {
                                  shallow: true,
                                })
                              }
                              type="secondary"
                              buttonText={resetLabel}
                              onlyBorder
                              hoverColour="bg-midnight-blue"
                              textColour="text-midnight-blue"
                              textHoverColour="group-hover:text-white"
                              icon={<RefreshIcon />}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </Transition.Child>
                </Transition>
              </>
            )}
          </div>
        </>
      )}
    </>
  )
}

export default Filters
