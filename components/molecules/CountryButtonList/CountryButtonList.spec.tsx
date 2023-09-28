import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import CountryButtonList from './CountryButtonList'
import { mockData } from './CountryButtonList.mockData'

describe('CountryButtonList', () => {
  test('it should render country button list', async () => {
    const { container } = render(<CountryButtonList countries={mockData} />)
    expect(container.firstChild).toBeTruthy()
  })

  test('it should scroll and change left position', async () => {
    const countryButtonList = render(<CountryButtonList countries={mockData} />)
    await fireEvent.scroll(countryButtonList.getByTestId('scroll'))
    expect(countryButtonList.getByTestId('scroll')).toHaveStyle('left: 100')
  })
})
