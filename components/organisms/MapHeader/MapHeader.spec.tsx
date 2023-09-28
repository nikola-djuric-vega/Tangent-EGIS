import React from 'react'
import { render, screen } from '@testing-library/react'
import MapHeader from './MapHeader'
import { mockData } from './MapHeader.mockData'
global.fetch = require('node-fetch')

describe('MapHeader', () => {
  it('should render MapHeader', () => {
    const { container } = render(<MapHeader {...mockData} />)
    expect(container.firstChild).toBeTruthy()
  })
})
