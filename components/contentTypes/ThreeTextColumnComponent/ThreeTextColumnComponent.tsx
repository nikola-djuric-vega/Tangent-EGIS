import React from 'react'
import ThreeColumnLayout, {
  InformationItem,
} from '../../molecules/ThreeColumnLayout/ThreeColumnLayout'
import Link from 'next/link'
import TagLine from '../../atoms/TagLine/TagLine'
import clsx from 'clsx'

const ThreeTextColumnComponent = (data: any) => {
  return (
    data?.threeColumnTextItems && (
      <section
        className={clsx(
          'border-b border-gray-light',
          data?.blueBg && 'bg-steel-gray-lightest'
        )}
      >
        <div className="container">
          <ThreeColumnLayout
            title={data?.title}
            itemType="infoItem"
            informationArray={data?.threeColumnTextItems}
            animation={data.animation}
          />
        </div>
      </section>
    )
  )
}

export default ThreeTextColumnComponent
