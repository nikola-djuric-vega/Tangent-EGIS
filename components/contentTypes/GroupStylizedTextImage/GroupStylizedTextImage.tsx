import React from 'react'
import ImageContentBreak from '../../molecules/ImageContentBreak/ImageContentBreak'

const GroupStylizedTextImage = (data: any) => {
  return (
    <section
      className="bg-steel-gray-lightest border-b border-gray-light"
      role="contentinfo"
    >
      <div className="container">
        <ImageContentBreak
          title={data.title}
          contentItems={data.groupStylizedTextImageItems}
        />
      </div>
    </section>
  )
}

export default GroupStylizedTextImage
