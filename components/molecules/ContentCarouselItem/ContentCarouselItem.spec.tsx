import React from 'react'
import { render } from '@testing-library/react'

import ContentCarouselItem from './ContentCarouselItem'

describe('ContentCarouselItem', () => {
  it('should render ContentCarouselItem component description', () => {
    const { getByText } = render(
      <ContentCarouselItem
        linkTo="content_page"
        image={{ url: '/images/test-image.png' }}
        title="France"
        readLength="5"
        description="Image Carousel Item"
      />
    )
    expect(getByText('France')).toBeTruthy()
    expect(getByText('Image Carousel Item')).toBeTruthy()
  })
})
