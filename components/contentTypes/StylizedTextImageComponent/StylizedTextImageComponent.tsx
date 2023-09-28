import React from 'react'
import StylizedTextImage from '../../molecules/StylizedTextImage/StylizedTextImage'
import clsx from 'clsx'

const StylizedTextImageComponent = (data: any) => {
  return (
    <section
      role="contentinfo"
      className={clsx(
        'md:half-steel-gray-lightest border-b border-gray-light',
        data.imagePosition === 'Left' && 'bottom-gray-lightest'
      )}
    >
      <div className="container">
        <StylizedTextImage {...data} />
      </div>
    </section>
  )
}

export default StylizedTextImageComponent
