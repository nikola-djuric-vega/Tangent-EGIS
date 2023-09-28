import React from 'react'
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import VideoOverlay from './VideoOverlay'

describe('VideoOverlay', () => {
  it('should render video overlay component', () => {
    const { container } = render(
      <VideoOverlay
        showPlayIcon
        videoUrl="https://www.youtube.com/watch?v=8dqpeMqVIU8"
        image="images/videoplayer.png"
      />
    )

    expect(container.firstChild).toBeTruthy()
  })

  it('should open render video overlay component', async () => {
    const { getByTestId, getByRole } = render(
      <VideoOverlay
        showPlayIcon
        videoUrl="https://www.youtube.com/watch?v=8dqpeMqVIU8"
        image="images/videoplayer.png"
      />
    )

    const playButton = getByRole('button')

    if (playButton) {
      await fireEvent.click(playButton)
      await expect(getByTestId('video-player')).toBeTruthy()
    }
  })

  it('should open render video overlay component and close with x button', async () => {
    const { getByTestId, getByRole } = render(
      <VideoOverlay
        showPlayIcon
        videoUrl="https://www.youtube.com/watch?v=8dqpeMqVIU8"
        image="images/videoplayer.png"
      />
    )

    const playButton = getByRole('button')

    if (playButton) {
      await fireEvent.click(playButton)
      await expect(getByTestId('video-player')).toBeTruthy()

      const closeButton = getByTestId('close-button')

      if (closeButton) {
        await fireEvent.click(closeButton)
        await expect(closeButton).not.toBeInTheDocument()
      }
    }
  })
})
