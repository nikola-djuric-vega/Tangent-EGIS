import React from 'react'
import ThreeColumnLayout from '../../molecules/ThreeColumnLayout/ThreeColumnLayout'

const ThreeColumnTextImageComponent = (data: any) => {
  const translateData = data.pages?.map((page: any) => {
    return {
      ...page,
      linkTo: page.url,
      title: page.pageTitle,
    }
  })

  return (
    <div className="border-b border-gray-light">
      <div className="container">
        {!!translateData && (
          <ThreeColumnLayout
            inlineCTA={data.inlineCTA && data.inlineCTA[0]}
            mobileView={data.mobileView}
            title={data.title}
            itemType="cardItem"
            informationArray={translateData}
            linkText={data.link?.name}
            linkTo={data.link?.url}
          />
        )}
      </div>
    </div>
  )
}

export default ThreeColumnTextImageComponent
