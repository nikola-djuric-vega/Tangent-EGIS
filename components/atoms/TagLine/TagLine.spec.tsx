import React from 'react'
import { render } from '@testing-library/react'

import TagLine from './TagLine'

describe('TagLine', () => {
  it('should render TagLine component', () => {
    const { getByText } = render(<TagLine additionalInfo="News" time={5} />)
    expect(getByText(/News/i)).toBeTruthy()
  })
})
