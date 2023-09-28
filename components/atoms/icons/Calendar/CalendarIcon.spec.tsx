import React from 'react'
import { render } from '@testing-library/react'

import CalendarIcon from './CalendarIcon'

describe('CalendarIcon', () => {
  it('should render an svg', () => {
    const { container } = render(<CalendarIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})
