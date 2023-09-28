import { render, screen } from '@testing-library/react'

import SearchResults from './SearchResults'
import React from 'react'
import { mockData } from './SearchResults.mockData'

describe('SearchResults', () => {
  it('should render Breadcrumb component inside SearchResults component', () => {
    render(
      <SearchResults
        {...mockData}
        breadcrumbs={[{ url: '/url', text: 'breadcrumb' }]}
      />
    )

    expect(screen.getByText('breadcrumb')).toBeTruthy()
  })
})
