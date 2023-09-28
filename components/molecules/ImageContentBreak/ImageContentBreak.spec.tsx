import React from 'react'
import { render, screen } from '@testing-library/react'

import ImageContentBreak from './ImageContentBreak'
import { data } from './ImageContentBreak.mockData'

describe('ImageContentBreak', () => {
  it('should render image content break component', () => {
    const { container } = render(
      <ImageContentBreak contentItems={data.contentItems} />
    )
    expect(container.firstChild).toBeTruthy()
  })

  it('should render image content break component with custom title', () => {
    render(<ImageContentBreak {...data} />)
    const text = screen.findAllByText('MockTitle')
    expect(text).toBeTruthy()
  })
})
