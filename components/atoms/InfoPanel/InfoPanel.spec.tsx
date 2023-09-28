import React from 'react'
import { render } from '@testing-library/react'

import InfoPanel from './InfoPanel'

describe('InfoPanel', () => {
  it('should render InfoPanel component', () => {
    const { getByText } = render(
      <InfoPanel title="Advisory &amp; delivery">sub text</InfoPanel>
    )

    expect(getByText('sub text')).toBeTruthy()
  })
})
