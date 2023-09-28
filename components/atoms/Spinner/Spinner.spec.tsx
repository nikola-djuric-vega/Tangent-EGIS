import React from 'react'
import { render } from '@testing-library/react'

import Spinner from './Spinner'

describe('Spinner', () => {
  it('should render Spinner', () => {
    const { container } = render(<Spinner />)
    expect(container.firstChild).toBeTruthy()
  })
})
