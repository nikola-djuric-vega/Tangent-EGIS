import React from 'react'
import { render } from '@testing-library/react'

import QuoteIcon from './QuoteIcon'

describe('QuoteIcon', () => {
  it('should render an svg', () => {
    const { container } = render(<QuoteIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})
