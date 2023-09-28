import React from 'react'
import { render, screen } from '@testing-library/react'
import FilterButtonList from './FilterButtonList'
import { mockData } from '../../molecules/CountryButtonList/CountryButtonList.mockData'

describe('FilterButtonList', () => {
  it('should render FilterButtonList', () => {
    render(<FilterButtonList buttons={mockData} />)
    expect(screen.getByRole('navigation')).toBeTruthy()
  })
})
