import React from 'react'
import { screen, render } from '@testing-library/react'
import { mockData } from './BannerCTA.mockData'

import BannerCTA from '../BannerCTA/BannerCTA'

describe('BannerCTA', () => {
  it('should render BannerCTA', () => {
    render(<BannerCTA {...mockData} />)
    expect(screen.getByText('Impact the Future')).toBeTruthy()
  })
})
