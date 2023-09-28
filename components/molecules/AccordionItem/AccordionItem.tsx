import React, { useEffect, useRef, useState } from 'react'
import ChevronIcon from '../../atoms/icons/Chevron/ChevronIcon'
import clsx from 'clsx'

export interface AccordionItemProps {
  title: string
  content: React.ReactNode
  index: number
  expanded?: boolean
}

const AccordionItem = ({
  title,
  index,
  content,
  expanded,
}: AccordionItemProps) => {
  const [isActive, setIsActive] = useState(expanded ? expanded : false)
  const [setHeight, setHeightState] = useState('0px')
  const contents = useRef<any>(null)

  const toggleAccordionItem = () => {
    setIsActive(!isActive)
    setHeightState(isActive ? '0px' : `${contents.current.scrollHeight}px`)
  }

  useEffect(() => {
    if (index === 0) {
      toggleAccordionItem()
    }
  }, [])

  return (
    <>
      <button
        className={clsx(
          'w-full flex justify-between items-center py-5 md:py-6 border-t-2 border-gray-light'
        )}
        aria-expanded={isActive}
        aria-controls={`panel-${index + 1}_contents`}
        onClick={() => toggleAccordionItem()}
      >
        <span className="h6">{title}</span>
        <span
          className={clsx(
            'transform transition-transform duration-300',
            isActive && ' rotate-180'
          )}
        >
          <ChevronIcon />
        </span>
      </button>
      <div
        id={`panel-${index + 1}_contents`}
        className="overflow-hidden transition-m-height duration-300"
        aria-hidden={!isActive}
        ref={contents}
        style={{ maxHeight: setHeight }}
      >
        <div
          className={clsx('pt-2 pb-8 md:pt-6 md:pb-12', {
            invisible: !isActive,
          })}
        >
          {content}
        </div>
      </div>
    </>
  )
}

export default AccordionItem
