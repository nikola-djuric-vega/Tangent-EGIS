import React from 'react'
import { screen, render } from '@testing-library/react'
import { mockData } from './BannerTimeline.mockData'

import BannerTimeline from '../BannerTimeline/BannerTimeline'

describe('BannerTimeline', () => {
  it('should render BannerTimeline', () => {
    render(<BannerTimeline {...mockData} />)
    expect(
      screen.getByText('New strategic acquisition in Australia')
    ).toBeTruthy()
  })
})
