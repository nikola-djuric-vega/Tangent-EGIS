import React from 'react'
import { render } from '@testing-library/react'
import FooterPrimaryNavigation from './FooterPrimaryNavigation'
import { data } from './FooterPrimaryNavigation.mockData'

describe('FooterPrimaryNavigation', () => {
  it('should render FooterPrimaryNavigation component and its items', () => {
    const { container } = render(<FooterPrimaryNavigation {...data} />)
    expect(container.firstChild).toBeTruthy()
  })
})
