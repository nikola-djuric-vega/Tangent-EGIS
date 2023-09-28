import React from 'react'
import { render, screen } from '@testing-library/react'

import data from './NavLinkDropdown.mockData'
import NavLinkDropdown from './NavLinkDropdown'
import NavLink from '../../atoms/NavLink/NavLink'

describe('NavLink', () => {
  it('should render TopNav', () => {
    render(<NavLinkDropdown {...data.oneColumn} />)
    expect(screen.getByRole('menu')).toBeTruthy()
  })
})
