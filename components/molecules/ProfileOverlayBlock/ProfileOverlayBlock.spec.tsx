import React, { useState } from 'react'
import {
  render,
  screen,
  fireEvent,
  waitForElementToBeRemoved,
  waitFor,
} from '@testing-library/react'

import ProfileOverlayBlock from './ProfileOverlayBlock'

describe('ProfileOverlayBlock', () => {
  test('it should render profile overlay block', async () => {
    const { container } = render(
      <ProfileOverlayBlock
        imageAltText={'image alt text'}
        setOpen={() => jest.fn()}
        open={true}
        image="test-image.png"
        title="Bulent"
        subtitle="subtitle"
        content={'<p class="body2">test</p>'}
      />
    )
    expect(container.firstChild).toBeTruthy()
  })

  test('it should render profile overlay block with quote item', async () => {
    const { container } = render(
      <ProfileOverlayBlock
        imageAltText={'image alt text'}
        setOpen={() => jest.fn()}
        open={true}
        image="test-image.png"
        title="Bulent"
        subtitle="subtitle"
        content={'<p class="body2">test</p>'}
        quoteItem={[{ text: 'quote item text', author: 'test', role: 'test' }]}
      />
    )
    expect(container.firstChild).toBeTruthy()
    expect(screen.getByText('quote item text')).toBeTruthy()
  })

  test('it should close overlay slider', async () => {
    const { getByRole } = render(
      <ProfileOverlayBlock
        imageAltText={'image alt text'}
        setOpen={() => jest.fn()}
        open={true}
        image="test-image.png"
        title="Bulent"
        subtitle="subtitle"
        content={'<p class="body2">test</p>'}
        quoteItem={[{ text: 'quote item text', author: 'test', role: 'test' }]}
      />
    )

    const closeButton = await getByRole('button')

    if (closeButton) {
      await fireEvent.click(closeButton)
    }
  })
})
