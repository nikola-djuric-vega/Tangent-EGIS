import React from 'react'
import { render, screen } from '@testing-library/react'
import RelatedContent from './RelatedContent'
import data from './RelatedContent.mockData'

describe('RelatedContent', () => {
  it('should render RelatedContent', () => {
    render(<RelatedContent {...data} />)
    expect(screen.getByRole('complementary')).toBeTruthy()
  })
})
