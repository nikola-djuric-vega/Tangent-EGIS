import React from 'react'
import { render } from '@testing-library/react'
import FooterLegalLinks from './FooterLegalLinks'

import { data } from './FooterLegalLinks.mockData'

describe('FooterLegalLinks', () => {
  it('should render FooterLegalLinks component and its items', () => {
    const { container } = render(<FooterLegalLinks {...data} />)

    expect(container.firstChild).toBeTruthy()
  })
})
