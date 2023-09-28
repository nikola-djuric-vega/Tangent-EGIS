import React from 'react'
import { render } from '@testing-library/react'

import StarIcon from './StarIcon'

describe('StarIcon', () => {
  it('should render an svg', () => {
    const { container } = render(<StarIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})
