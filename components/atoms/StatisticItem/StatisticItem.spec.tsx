import React from 'react'
import { render } from '@testing-library/react'

import StatisticItem from './StatisticItem'

describe('StatisticItem', () => {
  it('should render StatisticItem', () => {
    const { container } = render(
      <StatisticItem
        title="8500"
        subtitle="Lorem ipsum dolor sit"
        introText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed"
      />
    )
    expect(container.firstChild).toBeTruthy()
  })
})
