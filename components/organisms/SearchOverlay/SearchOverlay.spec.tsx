import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchOverlay from './SearchOverlay'

describe('SearchOverlay', () => {
  it('should render SearchOverlay', () => {
    const { container } = render(
      <SearchOverlay isOverlayOpen={true} setIsOverlayOpen={() => jest.fn()} />
    )
    expect(container.firstChild).toBeTruthy()
  })

  it('should call button close', async () => {
    const { container, getByRole } = render(
      <SearchOverlay isOverlayOpen={true} setIsOverlayOpen={() => jest.fn()} />
    )

    const button = getByRole('button')
    if (button) {
      await fireEvent.click(button)
    }
  })
})
