import React from 'react'
import { render } from '@testing-library/react'
//import OverlayLinkGridList from './OverlayLinkGridList'

import GlobalFootprintList from './GlobalFootprintList'

describe('GlobalFootprint', () => {
  it('should render GlobalFootprintList component title', () => {
    const { getByText } = render(
      <GlobalFootprintList footprintHeading="Global Footprint" />
    )
    expect(getByText('Global Footprint')).toBeTruthy()
  })
})
