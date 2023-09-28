import { render, screen } from '@testing-library/react'
import { one } from '../../molecules/Filters/Filters.mockData'
import FiltersHeader from './FiltersHeader'
import React from 'react'
import Filters from '../../molecules/Filters/Filters'

describe('FiltersHeader', () => {
  it('should render Breadcrumb component inside FiltersHeader component', () => {
    render(
      <FiltersHeader
        breadcrumbs={[
          {
            url: '',
            text: 'BREADCRUMB',
          },
        ]}
        title="Page Title"
        level={3}
        filters={<Filters url={'/filters'} filters={one.filters} />}
      />
    )

    expect(screen.getByText('BREADCRUMB')).toBeTruthy()
    expect(screen.getByText('Page Title')).toBeTruthy()
  })
})
