import React from 'react'
import { render } from '@testing-library/react'

import InlineCTA from './InlineCTA'

describe('ThreeColumnLayout', () => {
  it('should render InlineCTA component', () => {
    const { getByText } = render(
      <InlineCTA
        text="text"
        title="title"
        linkText="Sign me up"
        linkTo="link"
      />
    )
    expect(getByText('title')).toBeTruthy()
    expect(getByText('text')).toBeTruthy()
  })
})
