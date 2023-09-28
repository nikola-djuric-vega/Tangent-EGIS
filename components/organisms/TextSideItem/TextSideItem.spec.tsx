import React from 'react'
import { render, screen } from '@testing-library/react'
import TextSideItem from './TextSideItem'

describe('TextSideItem', () => {
  it('should render TextSideItem', () => {
    render(
      <TextSideItem sideItem={<div>side item</div>} text="text side item" />
    )
    expect(screen.getByText('text side item')).toBeTruthy()
  })
})
