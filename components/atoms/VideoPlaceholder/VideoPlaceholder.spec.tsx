import React from 'react'
import { render, screen } from '@testing-library/react'

import VideoPlaceholder from './VideoPlaceholder'

describe('VideoPlaceholder', () => {
  it('should render VideoPlaceholder ', () => {
    const mockFunction = jest.fn()

    const { container } = render(
      <VideoPlaceholder
        videoImage="https://www.bigheartsoutdoors.org/wp-content/uploads/2019/10/Rectangle-1920x1080-Placeholder.png"
        supportingText="as"
        onClickPlay={mockFunction}
      />
    )
    expect(container.firstChild).toBeTruthy()
  })
})
