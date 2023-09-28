import React from 'react'
import AccordionItem from '../../molecules/AccordionItem/AccordionItem'
import Heading from '../../atoms/Heading/Heading'
import GridLines from '../../atoms/GridLines/GridLines'

export interface AccordionProps {
  title?: string
  items: {
    title: string
    content: React.ReactNode
    expanded?: boolean
  }[]
}

const Accordion = ({ title, items }: AccordionProps) => {
  return (
    <div className="relative container">
      <GridLines
        grids={[{ desktopStartColumn: 1, align: 'right', alignMobile: 'left' }]}
      />
      <section className="pt-10 pb-10 md:pt-16 md:pb-20">
        {title && (
          <Heading level={5} className="mb-7">
            {title}
          </Heading>
        )}
        <div className="md:mx-5">
          {items.map((item, index) => {
            return (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                index={index}
                expanded={item.expanded}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Accordion
