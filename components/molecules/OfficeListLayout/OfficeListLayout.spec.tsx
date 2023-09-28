import React from 'react'
import { render } from '@testing-library/react'

import OfficeListLayout from './OfficeListLayout'
import { officesData } from './OfficeListLayout.mockData'

describe('OfficeListLayout', () => {
  it('should render office layout grid component', () => {
    const { container } = render(
      <OfficeListLayout title="Office" officesData={officesData} />
    )
    expect(container.firstChild).toBeTruthy()
  })
})
