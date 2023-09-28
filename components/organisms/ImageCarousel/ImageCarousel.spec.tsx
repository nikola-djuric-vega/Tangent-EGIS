import React from 'react'
import { render, screen } from '@testing-library/react'
import ImageCarousel from './ImageCarousel'
import data from './ImageCarousel.mockData'

describe('ImageCarousel', () => {
  it('should render ImageCarousel', () => {
    render(<ImageCarousel {...data} />)
    expect(screen.getByRole('contentinfo')).toBeTruthy()
  })
})
