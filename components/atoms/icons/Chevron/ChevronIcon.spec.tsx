import React from 'react'
import { render } from '@testing-library/react'

import ChevronIcon from './ChevronIcon'

describe('ChevronIcon', () => {
  it('should render an svg', () => {
    const { container } = render(<ChevronIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})
