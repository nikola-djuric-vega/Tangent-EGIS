import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import TextArea from './TextArea'

describe('TextArea', () => {
  it('should render TextArea component with placeholder ', () => {
    render(<TextArea placeholder="text area placeholder" />)
    expect(screen.getByPlaceholderText('text area placeholder')).toBeTruthy()
  })

  it('should render TextArea component with error ', () => {
    const { getByTestId } = render(
      <TextArea isError placeholder="text area placeholder" />
    )

    expect(screen.getByPlaceholderText('text area placeholder')).toBeTruthy()
    expect(getByTestId('text-area-test')).toHaveClass('text-red border-red')
  })

  const setup = () => {
    const utils = render(
      <TextArea isError placeholder="text area placeholder" />
    )
    const input: HTMLFormElement | any = utils.getByTestId('text-area-test')
    return {
      input,
      ...utils,
    }
  }

  it('should change text value on TextArea component', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'Search value' } })

    render(<TextArea isError placeholder="text area placeholder" />)

    // expect(screen.getByPlaceholderText('text area placeholder')).toBeTruthy()
    expect(input.value).toBe('Search value')
  })
})
