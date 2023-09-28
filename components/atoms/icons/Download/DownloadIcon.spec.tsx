import React from 'react'
import { render } from '@testing-library/react'

import DownloadIcon from './DownloadIcon'
import { theme } from '../../../../tailwind.config'

describe('DownloadIcon', () => {
  it('should render an svg', () => {
    const { container } = render(
      <DownloadIcon colour={theme.colors['midnight-blue']} />
    )
    expect(container.firstChild).toBeTruthy()
  })
})
