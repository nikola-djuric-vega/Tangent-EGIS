import React from 'react'
import { render, screen } from '@testing-library/react'

import ProjectHeader from './ProjectHeader'

describe('ProjectHeader', () => {
  test('it should render ProjectHeader component', async () => {
    const { container } = render(
      <ProjectHeader
        breadcrumbs={[
          {
            url: '',
            text: 'EUROPE',
          },
        ]}
        title="title"
        subTitle="subtitle"
        introText="intro text"
        linkText="link text"
        linkUrl="htt://google.com"
      />
    )
    expect(container.firstChild).toBeTruthy()
  })
})
