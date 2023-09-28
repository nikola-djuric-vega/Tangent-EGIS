import React from 'react'
import { render, screen } from '@testing-library/react'

import TextCarouselItem from './TextCarouselItem'

describe('TextCarouselItem', () => {
  it('should render text carousel item component', () => {
    render(
      <TextCarouselItem
        text="Carousel Item"
        author="John Doe"
        role="Lead Engineer"
      />
    )
    expect(screen.getByText('Carousel Item')).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Lead Engineer')).toBeInTheDocument()
  })
})
