import React from 'react'
import { render, screen } from '@testing-library/react'
import ContentCarousel from './ContentCarousel'
import data from './ContentCarousel.mockData'

describe('ContentCarousel', () => {
  it('should render ContentCarousel', () => {
    render(<ContentCarousel {...data} />)
    expect(screen.getByRole('contentinfo')).toBeTruthy()
  })

  it('should render ContentCarousel with link', () => {
    render(<ContentCarousel {...data} link={{ url: '/', name: 'View all' }} />)
    expect(screen.getByRole('contentinfo')).toBeTruthy()
  })
})
