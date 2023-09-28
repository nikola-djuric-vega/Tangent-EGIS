import React from 'react'
import { screen, render } from '@testing-library/react'
import { mockData } from './Pagination.mockData'

import Pagination from '../Pagination/Pagination'

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

describe('Pagination', () => {
  it('should render people Pagination', () => {
    render(<Pagination {...mockData} />)
    expect(screen.getByRole('navigation')).toBeTruthy()
  })
})
