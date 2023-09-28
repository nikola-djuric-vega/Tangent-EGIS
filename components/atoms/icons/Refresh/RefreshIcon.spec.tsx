import React from 'react'
import { render } from '@testing-library/react'

import RefreshIcon from './RefreshIcon'

describe('RefreshIcon', () => {
  it('should render an svg', () => {
    const { container } = render(<RefreshIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})
