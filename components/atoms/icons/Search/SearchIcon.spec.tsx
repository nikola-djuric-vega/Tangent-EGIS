import React from 'react'
import { render } from '@testing-library/react'

import SearchIcon from './SearchIcon'

describe('SearchIcon', () => {
  it('should render an svg', () => {
    const { container } = render(<SearchIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})
