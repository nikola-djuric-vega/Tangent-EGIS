import React from 'react'
import { render, screen } from '@testing-library/react'

import Heading from './Heading'

describe('Heading', () => {
  it('should render Heading component', () => {
    render(
      <Heading level={1}>The quick brown fox jumped over the lazy dog</Heading>
    )

    expect(
      screen.getByText('The quick brown fox jumped over the lazy dog')
    ).toBeTruthy()
  })
})
