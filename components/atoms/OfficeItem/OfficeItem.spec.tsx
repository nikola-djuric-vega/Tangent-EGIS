import React from 'react'
import { render } from '@testing-library/react'

import OfficeItem from './OfficeItem'

describe('OfficeItem', () => {
  it('should render OfficeItem component description', () => {
    const { getByText } = render(
      <OfficeItem
        office={{
          city: 'Istanbul',
          linkTo: 'istanbul_page',
          address: ['street name', 'street nanme two', '209392378'],
        }}
      />
    )
    expect(getByText('Istanbul')).toBeTruthy()
    expect(getByText('street name')).toBeTruthy()
    expect(getByText('street nanme two')).toBeTruthy()
    expect(getByText('209392378')).toBeTruthy()
  })
})
