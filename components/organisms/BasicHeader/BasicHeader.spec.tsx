import { render, screen } from '@testing-library/react'

import BasicHeader from './BasicHeader'
import React from 'react'

describe('BasicHeader', () => {
  it('should render Breadcrumb component inside BasicHeader component', () => {
    render(
      <BasicHeader
        breadcrumbs={[
          {
            url: '',
            text: 'BREADCRUMB',
          },
        ]}
        title="Page Title"
        level={3}
      />
    )

    expect(screen.getByText('BREADCRUMB')).toBeTruthy()
    expect(screen.getByText('Page Title')).toBeTruthy()
  })
})
