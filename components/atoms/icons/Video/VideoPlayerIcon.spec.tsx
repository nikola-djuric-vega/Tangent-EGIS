import React from 'react'
import { render } from '@testing-library/react'

import VideoPlayIcon from './VideoPlayIcon'

describe('VideoPlayIcon', () => {
  it('should render an svg', () => {
    const { container } = render(<VideoPlayIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})
