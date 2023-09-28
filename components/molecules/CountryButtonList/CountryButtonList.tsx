import Link from 'next/link'
import React, { createRef, SyntheticEvent, useEffect, useRef } from 'react'
import { useState } from 'react'
import Button from '../../atoms/Button/Button'
import CustomScrollBar from '../../atoms/CustomScrollBar/CustomScrollBar'
import Heading from '../../atoms/Heading/Heading'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import { useRouter } from 'next/router'
import { transformUrl } from '../../../utils/helpers'

interface Country {
  name: string
  url: string
}

interface Props {
  countries: Country[]
  heading?: string
}

export default function CountryButtonList({
  countries,
  heading = 'Countries of operation',
}: Props) {
  const router = useRouter()
  const [scrollPos, setScrollPos] = useState(0)
  const [isScrollVisible, setIsScrollVisible] = useState<boolean>(true)

  const scrollVisibleRef = useRef<undefined | any>()

  useEffect(() => {
    function handleResize() {
      setIsScrollVisible(
        scrollVisibleRef.current.scrollWidth >
          scrollVisibleRef.current.clientWidth
      )
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function onScroll(e: SyntheticEvent<HTMLDivElement>) {
    const userScroll = e.currentTarget.scrollLeft
    const lengthOfScroll =
      e.currentTarget.scrollWidth - e.currentTarget.clientWidth

    const convertToPercentage = (userScroll / lengthOfScroll) * 100

    setScrollPos(convertToPercentage)
  }

  return (
    <div className="relative z-10">
      <div className="grid grid-cols-5 gap-5 md:grid-cols-10 md:gap-10 h-full">
        <div className="col-start-1 col-span-full md:col-span-3">
          <Heading level={3} hasBlackDot className="h6">
            {heading}
          </Heading>
        </div>
        <div
          data-testid="scroll"
          ref={scrollVisibleRef}
          onScroll={onScroll}
          className="col-start-1 col-span-full md:col-start-4 md:col-span-6 overflow-x-auto scrollbar-hide"
        >
          <div className="flex items-center gap-4 md:flex-wrap">
            {!!countries.length &&
              countries?.map((country, idx) => (
                <Button
                  key={idx}
                  onClick={() => router.push(transformUrl(country.url))}
                  type="secondary"
                  buttonText={country.name}
                  textColour="text-midnight-blue"
                  textHoverColour="group-hover:text-white"
                  onlyBorder
                  icon={<ArrowIcon rightArrow width={16} height={20} />}
                />
              ))}
          </div>
        </div>
        {isScrollVisible && <CustomScrollBar scrollPos={scrollPos} />}
      </div>
    </div>
  )
}
