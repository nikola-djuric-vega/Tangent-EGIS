import { render, screen } from '@testing-library/react'

import BannerTimelineItem from './BannerTimelineItem'
import React from 'react'

describe('BannerTimelineItem', () => {
  it('should render BannerTimelineItem component', () => {
    render(
      <BannerTimelineItem
        number={1}
        title="New strategic acquisition in Australia"
      />
    )
    expect(
      screen.getByText('New strategic acquisition in Australia')
    ).toBeTruthy()
  })
  it('should render BannerTimelineItem component with white text', () => {
    const { container } = render(
      <BannerTimelineItem
        number={1}
        title="New strategic acquisition in Australia"
        active
      />
    )
    expect(container.firstChild).toHaveClass('text-white')
  })
})
