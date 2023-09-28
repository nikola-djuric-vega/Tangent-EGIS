import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Filters from './Filters'
import { projectData, secotrData, two } from './Filters.mockData'

describe('DropdownComponent', () => {
  it('should render dropdown', () => {
    render(<Filters {...projectData} />)
    expect(screen.findByTestId('project')).toBeTruthy()
  })

  it('should render dropdown', () => {
    render(<Filters {...secotrData} />)
    expect(screen.findByTestId('sector')).toBeTruthy()
  })

  it('should press dropdown', () => {
    const { getAllByTestId, getAllByText } = render(<Filters {...two} />)
    const dropdownButton = getAllByTestId('dropdown-btn')

    dropdownButton?.forEach((btn) => {
      fireEvent.click(btn)
      expect(getAllByText('Sector')).toBeTruthy()
      expect(getAllByText('Projects')).toBeTruthy()
      expect(getAllByText('Type')).toBeTruthy()
      expect(getAllByText('Order')).toBeTruthy()
      expect(getAllByText('Locations')).toBeTruthy()
    })
  })
})
