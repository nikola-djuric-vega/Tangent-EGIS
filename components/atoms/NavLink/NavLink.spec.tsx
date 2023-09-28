import React from 'react'
import { render } from '@testing-library/react'

import NavLink from './NavLink'

describe('NavLink', () => {
  it('should render NavLink component with the className "font-bold" ', () => {
    const { container } = render(
      <NavLink text="Secondary" url="index.html" bold />
    )
    expect(container.firstChild).toHaveClass('font-bold')
  })
  it('should render NavLink component with the text "Secondary" ', () => {
    const { getByText } = render(
      <NavLink text="Secondary" url="index.html" bold />
    )
    expect(getByText('Secondary')).toBeTruthy()
  })
})
