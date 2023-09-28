import React from 'react'
import { render, fireEvent, getByRole } from '@testing-library/react'

import SearchInput from './SearchInput'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

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

describe('SearchInput', () => {
  it('should render SearchInput ', () => {
    const { container } = render(
      <SearchInput dark setSearch={() => jest.fn()} />
    )
    expect(container.firstChild).toBeTruthy()
  })

  const setup = () => {
    const utils = render(
      <SearchInput
        setIsOverlayOpen={() => jest.fn()}
        searchOverlay={true}
        setSearch={() => jest.fn()}
      />
    )
    const input: HTMLFormElement | any = utils.getByTestId('site-search-test')
    return {
      input,
      ...utils,
    }
  }

  test('It should update input value and search', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'Search value' } })

    fireEvent.keyDown(input, {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })
    expect(input.value).toBe('Search value')
  })
})
