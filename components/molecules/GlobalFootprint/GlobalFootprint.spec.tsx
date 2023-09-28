import React from 'react'
import { render } from '@testing-library/react'

import GlobalFootprint from './GlobalFootprint'

describe('GlobalFootprint', () => {
  it('GlobalFootprint should render image src', () => {
    const { container } = render(
      <GlobalFootprint
        linkTo="index.html"
        image={{ image: { url: 'images/subsectorbanner.png' } }}
      />
    )
    expect(container.firstChild).toBeTruthy()
  })

  it('should render GlobalFootprint component title', () => {
    const { getByText } = render(
      <GlobalFootprint
        linkTo="index.html"
        image={{ image: { url: 'images/subsectorbanner.png' } }}
        title="5000+ Projects completed"
      />
    )
    expect(getByText('5000+ Projects completed')).toBeTruthy()
  })

  it('should render GlobalFootprint component description', () => {
    const { getByText } = render(
      <GlobalFootprint
        linkTo="index.html"
        image={{ image: { url: 'images/subsectorbanner.png' } }}
        title="5000+ Projects completed"
        description="Present in 5 continents, we have a global view with a local touch."
      />
    )
    expect(
      getByText(
        'Present in 5 continents, we have a global view with a local touch.'
      )
    ).toBeTruthy()
  })
})
