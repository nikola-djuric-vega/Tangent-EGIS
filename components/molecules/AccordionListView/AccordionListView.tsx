import React from 'react'
import AccordionItem from '../../atoms/OfficeAccordionItem/AccordionItem'

interface Props {
  title: string
}

export default function AccordionListView({
  list,
  onClick,
}: {
  list: Props[]
  onClick(value: string): void
}) {
  return (
    <div className="flex flex-col listViewHeight">
      {list &&
        list.map((item, idx) => (
          <button key={idx} onClick={() => onClick(item.title)}>
            <AccordionItem text={item.title} />
          </button>
        ))}
    </div>
  )
}
