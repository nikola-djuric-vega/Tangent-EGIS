import React from 'react'
import { render } from '@testing-library/react'
import data from './Translation.mockData'
import Translation from './Translation'

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

describe('Translation', () => {
  it('should render Translation component', () => {
    const { container } = render(<Translation {...data} />)
    expect(container.firstChild).toBeTruthy()
  })
})
