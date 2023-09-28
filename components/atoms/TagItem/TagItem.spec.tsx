import React from 'react'
import { render } from '@testing-library/react'

import TagItem from './TagItem'

describe('TagItem', () => {
  it('should render TagItem component', () => {
    const { getByText } = render(
      <TagItem buttonText="TagItem" variant="primary" />
    )
    expect(getByText(/TagItem/i)).toBeTruthy()
  })
})
