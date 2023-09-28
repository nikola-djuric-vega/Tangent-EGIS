import React from 'react'
import { render, screen } from '@testing-library/react'

import SearchSuggestions from './SearchSuggestions'

describe('SearchSuggestions', () => {
  test('it should render social links', async () => {
    const { getByText } = render(
      <SearchSuggestions
        suggestionLabel="Popular"
        searchSuggestions={['Search', 'Popular', 'Search Suggestions']}
      />
    )
    expect(getByText('Search')).toBeTruthy()
    expect(getByText('Popular')).toBeTruthy()
    expect(getByText('Search Suggestions')).toBeTruthy()
    expect(
      screen.queryByText('Not in search suggestions')
    ).not.toBeInTheDocument()
  })
})
