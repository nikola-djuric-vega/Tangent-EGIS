import React from 'react'
import { render, screen } from '@testing-library/react'

import Input from './Input'

describe('Input', () => {
  it('should render Input component with placeholder ', () => {
    render(<Input placeholder="text input placeholder" />)
    expect(screen.getByPlaceholderText('text input placeholder')).toBeTruthy()
  })

  it('should render Input component with error ', () => {
    const { getByTestId } = render(
      <Input hasError placeholder="text input placeholder" />
    )
    expect(screen.getByPlaceholderText('text input placeholder')).toBeTruthy()
    expect(getByTestId('input-test')).toHaveClass('text-red border-red')
  })
})
