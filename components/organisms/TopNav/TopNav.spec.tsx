import React from 'react'
import { render, screen } from '@testing-library/react'
import data from './TopNav.mockData'
import TopNav from './TopNav'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

describe('NavLink', () => {
  it('should render TopNav', () => {
    render(
      <TopNav
        primaryLinks={data.primaryLinks}
        secondaryLinks={data.secondaryLinks}
        url_en={data.url_en}
        url_fr={data.url_fr}
      />
    )
    expect(screen.getByRole('navigation')).toBeTruthy()
  })
})
