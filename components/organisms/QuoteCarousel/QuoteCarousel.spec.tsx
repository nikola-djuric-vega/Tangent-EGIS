import React from 'react'
import { render, screen } from '@testing-library/react'
import QuoteCarousel from './QuoteCarousel'
import data from './QuoteCarousel.mockData'

describe('QuoteCarousel', () => {
  it('should render QuoteCarousel', () => {
    render(<QuoteCarousel {...data.carousels[0]} />)
    expect(screen.getByRole('contentinfo')).toBeTruthy()
  })

  it('should render QuoteCarousel with single quote', () => {
    render(<QuoteCarousel {...data.carousels[1]} />)
    expect(screen.getByRole('contentinfo')).toBeTruthy()
  })
})
