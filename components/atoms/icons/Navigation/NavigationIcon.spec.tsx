import React from 'react'
import { render } from '@testing-library/react'

import NavigationIcon from './NavigationIcon'

describe('NavigationIcon', () => {
  it('should render an svg', () => {
    const { container } = render(<NavigationIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})
