import { render, screen } from '@testing-library/react'

import ArticleTagline from './ArticleTagline'
import React from 'react'

describe('ArticleTagline', () => {
  it('should render ArticleTagline component', () => {
    render(
      <ArticleTagline date="2021-07-05T00:00:00Z" time="45" tag="BUILDINGS" />
    )

    expect(screen.getByText('45 mins read')).toBeTruthy()
  })
})
