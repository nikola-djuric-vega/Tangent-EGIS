import React from 'react'
import { render } from '@testing-library/react'
import BingMap from './BingMap'

describe('BingMap', () => {
  it('should render the BingMap component', () => {
    const { container } = render(<BingMap lat={50} lng={20} />)
    expect(container.firstChild).toBeTruthy()
  })
})
