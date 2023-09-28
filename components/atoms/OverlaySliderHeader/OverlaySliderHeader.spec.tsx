import React from 'react'
import { render } from '@testing-library/react'

import OverlaySliderHeader from './OverlaySliderHeader'

describe('OverlaySliderHeader', () => {
  test('it should render profile overlay block', async () => {
    const { container } = render(
      <OverlaySliderHeader
        image="images/test-image.png"
        title="Bulent"
        subtitle="subtitle"
      />
    )
    expect(container.firstChild).toBeTruthy()
  })
})
