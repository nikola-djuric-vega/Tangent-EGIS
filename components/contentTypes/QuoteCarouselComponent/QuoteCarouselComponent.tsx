import React from 'react'
import QuoteCarousel from '../../organisms/QuoteCarousel/QuoteCarousel'

const QuoteCarouselComponent = (data: any) => {
  return <QuoteCarousel items={data.quotes} id="testing" />
}

export default QuoteCarouselComponent
