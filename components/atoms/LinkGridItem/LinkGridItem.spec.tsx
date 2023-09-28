import React from 'react'
import { render } from '@testing-library/react'

import LinkGridItem from './LinkGridItem'

describe('LinkGridItem', () => {
  it('should render LinkGridItem component', () => {
    const { getByText } = render(
      <LinkGridItem
        image={{ url: 'test-image.png' }}
        title="Test title"
        subTitle="Test subtitle"
        buttonText="Test button"
      />
    )
    expect(getByText('Test title')).toBeTruthy()
  })

  const url = { url: 'test-image' }

  it('should render image src and alt values', () => {
    const { getByRole } = render(
      <LinkGridItem
        image={url}
        title="Test title"
        subTitle="Test subtitle"
        buttonText="Test button"
      />
    )
    expect(getByRole('img')).toBeTruthy()
  })
})
