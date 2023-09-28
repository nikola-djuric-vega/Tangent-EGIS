import React, { SyntheticEvent, useEffect, useRef } from 'react'
import { useState } from 'react'
import Button from '../../atoms/Button/Button'
import CustomScrollBar from '../../atoms/CustomScrollBar/CustomScrollBar'
import ArrowIcon from '../../atoms/icons/Arrow/ArrowIcon'
import { useRouter } from 'next/router'

interface Props {
  heading?: string
  buttons: { name: string }[]
}

export default function FilterButtonList({ heading, buttons }: Props) {
  const router = useRouter()
  const [scrollPos, setScrollPos] = useState(0)
  const [isScrollVisible, setIsScrollVisible] = useState<boolean>(true)

  const handleQuery = () => {
    const path = router.asPath.split('?')[0]
    const query = router.query
    delete query.slug
    return { path, query }
  }

  const handleFilter = (filter: string) => {
    const { path, query } = handleQuery()
    delete query.page
    query.filter = filter
    router.push(
      {
        pathname: path,
        query: query,
      },
      undefined,
      { scroll: false }
    )
  }

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
          {heading && <p className="tag">{heading}</p>}
        </div>
        <div
          data-testid="scroll"
          ref={scrollVisibleRef}
          onScroll={onScroll}
          className="col-start-1 col-span-full md:col-start-4 md:col-span-6 overflow-x-auto scrollbar-hide"
        >
          <div className="flex items-center gap-4 md:flex-wrap">
            {buttons.map((button, idx) => (
              <Button
                key={idx}
                onClick={() => handleFilter(button.name)}
                type="secondary"
                buttonText={button.name}
                textColour="text-midnight-blue"
                textHoverColour="group-hover:text-white"
                onlyBorder
                icon={<ArrowIcon rightArrow width={16} height={20} />}
                active={router?.query?.filter === button.name}
              />
            ))}
          </div>
        </div>
        {isScrollVisible && <CustomScrollBar scrollPos={scrollPos} />}
      </div>
    </div>
  )
}
