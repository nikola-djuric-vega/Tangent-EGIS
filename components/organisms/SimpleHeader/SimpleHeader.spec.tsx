import { render, screen } from '@testing-library/react'

import SimpleHeader from './SimpleHeader'
import React from 'react'

describe('SimpleHeader', () => {
  it('should render Breadcrumb component inside SimpleHeader component', () => {
    render(
      <SimpleHeader
        breadcrumbs={[
          {
            url: '',
            text: 'EUROPE',
          },
        ]}
        title="Europe"
        level={3}
        description="Traditionally based in Europe, Egis has many local subsidiaries working together to offer the best services across the European continent."
      />
    )

    expect(screen.getByText('EUROPE')).toBeTruthy()
    expect(screen.getByText('Europe')).toBeTruthy()
    expect(
      screen.getByText(
        'Traditionally based in Europe, Egis has many local subsidiaries working together to offer the best services across the European continent.'
      )
    ).toBeTruthy()
  })
})
