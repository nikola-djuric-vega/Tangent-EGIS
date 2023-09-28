import React from 'react'
import { render } from '@testing-library/react'

import GridLines from './GridLines'

describe('GridLinesComponent', () => {
  it('should render grid line component', () => {
    const { container } = render(
      <GridLines
        grids={[
          {
            desktopStartColumn: 2,
            align: 'middle',
            alignMobile: 'left',
          },
          {
            desktopStartColumn: 2,
            mobileStartColumn: 2,
            align: 'middle',
            alignMobile: 'left',
          },
        ]}
      />
    )
    expect(container.firstChild).toBeTruthy()
    expect(
      container.getElementsByClassName('bg-gray-light').length
    ).toBeTruthy()
  })

  it('should render grid line with a end line', () => {
    const { container } = render(
      <GridLines
        endLineDesktop
        endLineMobile
        colour="bg-gray-light"
        grids={[
          {
            mobileStartColumn: 1,
            align: 'middle',
            alignMobile: 'left',
          },
          {
            desktopStartColumn: 2,
            mobileStartColumn: 5,
            align: 'middle',
            alignMobile: 'left',
          },
        ]}
      />
    )
    expect(container.firstChild).toBeTruthy()

    expect(
      container.getElementsByClassName('bg-gray-light').length
    ).toBeTruthy()
  })
})
