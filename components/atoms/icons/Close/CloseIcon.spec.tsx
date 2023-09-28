import React from 'react'
import { render } from '@testing-library/react'

import CloseIcon from './CloseIcon'
import { theme } from '../../../../tailwind.config'

describe('CloseIcon', () => {
  it('should render an svg', () => {
    const { container } = render(
      <CloseIcon colour={theme.colors['midnight-blue']} />
    )
    expect(container.firstChild).toBeTruthy()
  })
})
