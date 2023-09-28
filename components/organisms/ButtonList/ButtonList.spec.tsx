import React from 'react'
import { render, screen } from '@testing-library/react'
import CountryList from './ButtonList'
import { mockData } from '../../molecules/CountryButtonList/CountryButtonList.mockData'

describe('CountryList', () => {
  it('should render CountryList', () => {
    render(<CountryList countries={mockData} />)
    expect(screen.getByRole('navigation')).toBeTruthy()
  })
})
