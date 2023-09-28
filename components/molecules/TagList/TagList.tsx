import React, { useState, SyntheticEvent, useEffect, useRef } from 'react'
import CustomScrollBar from '../../atoms/CustomScrollBar/CustomScrollBar'
import GridLines from '../../atoms/GridLines/GridLines'
import Heading from '../../atoms/Heading/Heading'
import TagItem from '../../atoms/TagItem/TagItem'

import { Tag } from '../../../types/CMS/insight-page'

export default function TagList({
  title,
  tags,
  variant,
}: {
  title: string
  tags: Tag[]
  variant: 'primary' | 'cta'
}) {
  const [scrollPos, setScrollPos] = useState<number>(0)
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
    <div className="h-full relative py-9">
      <GridLines
        grids={[
          {
            desktopStartColumn: 4,
            align: 'right',
            alignMobile: 'right',
          },
        ]}
      />
      <div className="grid grid-cols-5 md:grid-cols-10 gap-x-5 md:gap-x-10">
        <div className="col-start-1 col-span-3 flex items-center mx-5 md:mx-0">
          <Heading level={6} hasBlackDot>
            {title}
          </Heading>
        </div>
        <div
          data-testid="scroll"
          ref={scrollVisibleRef}
          onScroll={onScroll}
          className="col-start-1 md:col-start-4 flex md:flex-wrap col-span-full gap-3 overflow-x-auto scrollbar-hide ml-5 md:ml-9 mt-5 md:mt-0"
        >
          {tags.map((tag, idx) => {
            return <TagItem variant={variant} buttonText={tag.name} key={idx} />
          })}
        </div>

        {isScrollVisible && (
          <div className="mx-5 md:mx-0 col-span-full mt-7 md:mt-0">
            <CustomScrollBar scrollPos={scrollPos} />
          </div>
        )}
      </div>
    </div>
  )
}
