import React from 'react'
import { render } from '@testing-library/react'

import VideoPlaceholder from './VideoImagePlaceHolder'

describe('VideoPlaceholder', () => {
  it('should render VideoPlaceholder component', () => {
    const mockClick = jest.fn()

    const { container } = render(
      <VideoPlaceholder
        imageAltText={'video placeholder image'}
        showPlayIcon={true}
        onClickPlay={mockClick}
        image="images/videoplayer.png"
        supportingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus."
      />
    )
    expect(container.firstChild).toBeTruthy()
  })
})
