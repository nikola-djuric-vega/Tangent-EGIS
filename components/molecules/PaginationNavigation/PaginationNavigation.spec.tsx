import React from 'react'
import { screen, render } from '@testing-library/react'
import PaginationNavigation from './PaginationNavigation'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('PaginationNavigation', () => {
  it('should render people PaginationNavigation', () => {
    useRouter.mockImplementation(() => ({
      route: '/',
      locales: ['en', 'fr'],
      pathname: '',
      query: {},
      asPath: '/',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }))
    render(<PaginationNavigation initialPage={'1'} pageCount={10} />)
    expect(screen.getByRole('navigation')).toBeTruthy()
  })

  it('should render people PaginationNavigation without initial page', () => {
    useRouter.mockImplementation(() => ({
      route: '/',
      locales: ['en', 'fr'],
      pathname: '',
      query: {},
      asPath: '/',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }))

    render(<PaginationNavigation pageCount={10} />)
    expect(screen.getByRole('navigation')).toBeTruthy()
  })
})
