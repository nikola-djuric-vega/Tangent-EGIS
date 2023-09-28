import React from 'react'
import { render } from '@testing-library/react'

import MapMarker from './MapMarker'

describe('MapMarker', () => {
  it('should render MapMarker component', () => {
    const { container } = render(<MapMarker />)
    expect(container.firstChild).toBeTruthy()
  })
})
