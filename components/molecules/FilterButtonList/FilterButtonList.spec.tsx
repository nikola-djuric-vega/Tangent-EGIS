import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import FilterButtonList from './FilterButtonList'
import { mockData } from './FilterButtonList.mockData'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('FilterButtonList', () => {
  it('should render FilterButtonList', () => {
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
    const { container, getByTestId } = render(
      <FilterButtonList heading="filter button list" buttons={mockData} />
    )

    fireEvent.scroll(getByTestId('scroll'), { target: { scrollY: 100 } })

    expect(container.firstChild).toBeTruthy()
  })

  it('should click on filter button list', () => {
    const { container, getAllByRole } = render(
      <FilterButtonList heading="filter button list" buttons={mockData} />
    )

    const firstButton = getAllByRole('button')[0]

    if (firstButton) {
      fireEvent.click(firstButton)
    }

    expect(container.firstChild).toBeTruthy()
  })
})
