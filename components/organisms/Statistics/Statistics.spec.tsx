import React from 'react'
import { render, screen } from '@testing-library/react'
import Statistics from './Statistics'
import { mockData } from './Statistics.mockData'

describe('Statistics', () => {
  it('should render Statistics', () => {
    render(<Statistics {...mockData} />)
    expect(screen.getByRole('contentinfo')).toBeTruthy()
  })
})
