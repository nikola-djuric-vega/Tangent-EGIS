import React from 'react'
import { render } from '@testing-library/react'

import PhoneIcon from './PhoneIcon'

describe('PhoneIcon', () => {
  it('should render an svg', () => {
    const { container } = render(<PhoneIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})
