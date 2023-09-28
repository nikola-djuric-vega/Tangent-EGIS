import React from 'react'
import { render } from '@testing-library/react'

import Card from './Card'

describe('Card', () => {
  it('should render Card component description', () => {
    const { getByText } = render(
      <Card
        linkTo="index.html"
        image={{ featured_url: 'test-image.png' }}
        description="hello world"
      />
    )
    expect(getByText('hello world')).toBeTruthy()
  })

  it('card shall render image src and alt values', () => {
    const { getByRole } = render(
      <Card
        linkTo="index.html"
        image={{ umbracoFile: { featured_url: 'test-image.png' } }}
      />
    )
    expect(getByRole('img')).toBeTruthy()
  })
})
