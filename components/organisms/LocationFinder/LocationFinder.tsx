import React, { useEffect, useRef, useState } from 'react'
import GridLines, { Grid } from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'
import OfficeRegionListView from '../../molecules/AccordionListView/AccordionListView'

import { Transition } from '@headlessui/react'
import OfficeListLayout from '../../molecules/OfficeListLayout/OfficeListLayout'
import clsx from 'clsx'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import { Office, OfficeAccordion, Region } from '../../../types/CMS'
import { useRouter } from 'next/router'

export default function LocationFinder({ title, continents }: OfficeAccordion) {
  const [currentIndex, setCurrentIdx] = useState(0)
  const [list, setList] = useState<any>()
  const [regions, setRegions] = useState<Region[] | undefined>()
  const [region, setRegion] = useState<Region>()
  const [regionName, setRegionName] = useState<string>()

  const [countryName, setCountryName] = useState<string>()

  const [countryRegion, setCountryRegion] = useState<string>()

  const [height, setHeight] = useState<number>(500)

  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  const buttonClick = useRef<number | null>()

  const router = useRouter()

  const classes = {
    base: 'transition ease-in-out duration-200 transform',
    enterFrom: `opacity-0 delay-200 ${
      buttonClick.current === 0 ? 'translate-x-full' : '-translate-x-full'
    }`,
    enterTo: 'translate-x-0',
    leaveTo: `opacity-0 ${
      buttonClick.current === 0 ? '-translate-x-full' : 'translate-x-full'
    }`,
  }

  const grids: Grid[] = [
    {
      desktopStartColumn: 2,
      mobileStartColumn: 1,
      align: 'middle',
      alignMobile: 'right',
    },
  ]

  function handleContinentClick(continent: string) {
    buttonClick.current = 0
    setCurrentIdx(1)
    setList(
      continents.find((item: { title: string }) => item.title === continent)
        ?.countries
    )
    setRegionName(continent)
  }

  function handleCountryClick(country: string) {
    buttonClick.current = 0
    const regions = list.find(
      (item: { title: string; regions: Region[] }) => item.title === country
    ).regions

    setCountryName(country)

    if (regions.length === 1) {
      setCurrentIdx(3)
      setRegion(regions[0])
      setRegions(undefined)
    } else {
      setCurrentIdx(2)
      setRegions(regions)
    }
  }

  function handleRegionClick(region: string) {
    buttonClick.current = 0

    const offices = regions!.find(
      (item: { title: string; regionOffices: Office[] }) =>
        item.title === region
    )

    setRegion(offices)
    setCurrentIdx(3)
  }

  function handleBackButton() {
    buttonClick.current = 1
    if (currentIndex !== 0) {
      if (regions === undefined && currentIndex === 3) {
        setCurrentIdx(2)
      }
      setCurrentIdx((currentIdx) => currentIdx - 1)
    }
  }

  const AccordionListView = useRef<any>()
  const OfficeGridView = useRef<any>()

  const calculateAccordionListView = () => {
    let offsets = AccordionListView.current
      .querySelector('.listViewHeight')
      ?.getBoundingClientRect()

    if (offsets) {
      setHeight(offsets.height + 200)
    }
  }

  const calculateOfficeGridView = () => {
    let offsets = OfficeGridView.current
      .querySelector('.officeListView')
      ?.getBoundingClientRect()

    if (offsets) {
      setHeight(offsets.height + 200)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (currentIndex !== 3) {
        calculateAccordionListView()
      } else {
        calculateOfficeGridView()
      }
    }, 500)
  }, [currentIndex, router.locale])

  useEffect(() => {
    if (continents.length <= 1) {
      setRegionName(continents[0].title)
      setList(continents[0].countries)
      setCurrentIdx(1)
      calculateAccordionListView()

      if (continents[0].countries.length > 1) {
        setCurrentIdx(1)
        setList(continents[0].countries)
        calculateAccordionListView()
      } else if (continents[0].countries[0].regions.length <= 1) {
        setCurrentIdx(3)
        setRegion(continents[0].countries[0].regions[0])
        calculateOfficeGridView()
      } else {
        setRegions(continents[0].countries[0].regions)
        setCurrentIdx(2)
        calculateAccordionListView()
      }
    }
  }, [router.locale])

  useEffect(() => {
    const currentRegion = continents.find(
      (continent) => continent.title === regionName
    )

    const currentCountry = currentRegion?.countries.find(
      (country) => country.title === countryName
    )

    if (currentIndex === 0) {
      setIsDisabled(true)
    }

    if (
      currentIndex === 3 &&
      currentRegion &&
      currentRegion?.countries.length <= 1
    ) {
      const country = currentRegion.countries[0]
      if (country.regions.length <= 1) {
        setIsDisabled(true)
      }
    }

    if (currentIndex === 1 && continents.length <= 1) {
      setIsDisabled(true)
    } else if (currentIndex === 1 && continents.length > 1) {
      setIsDisabled(false)
    }

    if (currentRegion) {
      if (currentIndex === 3 && currentRegion.countries.length <= 1) {
        const regionsInCountry = currentRegion.countries[0].regions

        if (regionsInCountry.length > 1) {
          setIsDisabled(false)
        }
      }

      if (currentIndex === 3 && currentRegion?.countries.length > 1) {
        setIsDisabled(false)
      }

      if (
        currentIndex === 2 &&
        currentCountry &&
        currentCountry?.regions.length >= 1
      ) {
        setCountryRegion(currentCountry.title)
        setIsDisabled(false)
      } else if (currentIndex === 2 && currentRegion.countries.length <= 1) {
        setIsDisabled(true)
      }
    }
  }, [currentIndex])

  return (
    <div
      style={{ height: height }}
      className="relative transition-height transform ease-in-out duration-500 overflow-hidden"
    >
      <GridLines grids={grids} />

      <div className="flex flex-col sm:grid sm:grid-cols-10 sm:gap-x-10 md:pt-20 pt-10 relative">
        <div className="sm:col-start-1 flex items-center sm:items-start sm:flex-col relative sm:h-auto">
          <div
            className={clsx(
              'transition transform translate-x-0 duration-200 absolute',
              currentIndex !== 0 && 'sm:translate-x-0',
              currentIndex !== 0 && isDisabled
                ? 'translate-x-4'
                : 'translate-x-16',
              currentIndex === 0 && 'translate-x-0 delay-200'
            )}
          >
            {title && (
              <Heading level={6} className="sm:mb-8">
                {title}
              </Heading>
            )}
          </div>

          <div className="order-first sm:order-none h-14 relative sm:mt-10">
            <Transition show={!isDisabled}>
              <Transition.Child
                enter={classes.base}
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave={classes.base}
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <button
                  aria-label="office back button"
                  data-testid="back-button"
                  className="relative"
                  onClick={() => handleBackButton()}
                >
                  <ArrowIcon
                    backgroundColor="super-lime"
                    width={18}
                    height={18}
                  />
                </button>
              </Transition.Child>
            </Transition>
          </div>
        </div>

        <div
          className={clsx(
            'sm:col-start-2 sm:col-span-4 relative mb-10 mx-4 sm:m-0',
            {
              hidden: currentIndex === 0,
            }
          )}
        >
          <Transition show={currentIndex === 1}>
            <Transition.Child
              enter="transition ease-in-out duration-400 delay-100 transform"
              enterFrom={classes.enterFrom}
              enterTo="translate-x-0"
              leave={classes.base}
              leaveFrom="translate-x-0 opacity-100"
              leaveTo={classes.leaveTo}
              className="absolute left-0 top-0 my-4 md:my-0 md:ml-4"
            >
              <Heading level={6}>{regionName}</Heading>
            </Transition.Child>
          </Transition>
          <Transition show={currentIndex === 2}>
            <Transition.Child
              enter="transition ease-in-out duration-400 delay-100 transform"
              enterFrom={classes.enterFrom}
              enterTo="translate-x-0"
              leave={classes.base}
              leaveFrom="translate-x-0 opacity-100"
              leaveTo={classes.leaveTo}
              className="absolute left-0 top-0 my-4 md:my-0 md:ml-4"
            >
              <Heading level={6}>{countryRegion}</Heading>
            </Transition.Child>
          </Transition>
        </div>
        <div
          ref={AccordionListView}
          className={clsx('sm:col-start-6 col-span-full relative mx-4 sm:mx-0')}
        >
          <Transition show={currentIndex === 0}>
            <Transition.Child
              enter={classes.base}
              enterFrom={classes.enterFrom}
              enterTo="translate-x-0"
              leave={classes.base}
              leaveFrom="translate-x-0 opacity-100"
              leaveTo={classes.leaveTo}
              className="absolute w-full"
              data-testid="continent-list"
            >
              <OfficeRegionListView
                list={continents}
                onClick={(continent) => handleContinentClick(continent)}
              />
            </Transition.Child>
          </Transition>

          <Transition show={currentIndex === 1}>
            <Transition.Child
              enter={classes.base}
              enterFrom={classes.enterFrom}
              enterTo="translate-x-0"
              leave={classes.base}
              leaveFrom="translate-x-0 opacity-100"
              leaveTo={classes.leaveTo}
              className="absolute w-full sm:pb-20"
              data-testid="country-list"
            >
              <OfficeRegionListView
                list={list}
                onClick={(country) => handleCountryClick(country)}
              />
            </Transition.Child>
          </Transition>

          <Transition show={currentIndex === 2}>
            <Transition.Child
              enter={classes.base}
              enterFrom={classes.enterFrom}
              enterTo="translate-x-0"
              leave={classes.base}
              leaveFrom="translate-x-0 opacity-100"
              leaveTo={classes.leaveTo}
              className="absolute w-full"
              data-testid="region-list"
            >
              <OfficeRegionListView
                list={regions!}
                onClick={(region) => handleRegionClick(region)}
              />
            </Transition.Child>
          </Transition>
        </div>
        <div
          ref={OfficeGridView}
          className="col-start-1 sm:col-start-2 absolute w-full col-span-full mt-20 px-4 sm:px-0"
        >
          <Transition show={currentIndex === 3}>
            <Transition.Child
              enter="transition ease-in-out duration-400 delay-100 transform"
              enterFrom={classes.enterFrom}
              enterTo="translate-x-0"
              leave={classes.base}
              leaveFrom="translate-x-0 opacity-100"
              leaveTo={classes.leaveTo}
              className="sm:absolute sm:left-0 sm:top-0"
            >
              {region && <Heading level={6}>{region.title}</Heading>}
            </Transition.Child>
            <Transition.Child
              enter={classes.base}
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave={classes.base}
              leaveFrom="translate-x-0 opacity-100"
              leaveTo={classes.leaveTo}
              className="relative sm:mt-10"
              data-testid="office-list"
            >
              {region && (
                <div className="officeListView">
                  <div className="sm:hidden h-px bg-gray w-full my-6" />
                  <OfficeListLayout officesData={region} />
                </div>
              )}
            </Transition.Child>
          </Transition>
        </div>
      </div>
    </div>
  )
}
