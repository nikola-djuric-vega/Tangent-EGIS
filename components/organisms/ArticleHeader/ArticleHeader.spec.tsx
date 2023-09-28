import { render, screen } from '@testing-library/react'

import ArticleHeader from './ArticleHeader'
import React from 'react'

describe('ArticleHeader', () => {
  it('should render ArticleHeader component', () => {
    render(
      <ArticleHeader
        breadcrumbs={[
          {
            url: 'index.html',
            text: 'EVENTS ',
          },
          {
            url: 'index.html',
            text: 'WEBINAR RECORDINGS',
          },
          {
            url: '',
            text: 'HOW VIRTUAL REALITY SECURES THE DANGEROUS TRAINING OF THE PATROLLERS',
          },
        ]}
        title="The A63 motorway, global pioneer for autonomous driving"
        date="2021-07-05T00:00:00Z"
        time="45"
        tag="BUILDINGS"
      />
    )

    expect(screen.getByText('EVENTS')).toBeTruthy()
    expect(
      screen.getByText(
        'The A63 motorway, global pioneer for autonomous driving'
      )
    ).toBeTruthy()
    expect(screen.getByText('45 mins read')).toBeTruthy()
  })
})
