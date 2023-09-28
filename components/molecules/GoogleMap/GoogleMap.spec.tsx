import React from 'react'
import { render } from '@testing-library/react'
import GoogleMap from './GoogleMap'

describe('GoogleMap', () => {
  it('should render the GoogleMap component', () => {
    const { container } = render(<GoogleMap lat={50} lng={20} />)
    expect(container.firstChild).toBeTruthy()
  })
})
