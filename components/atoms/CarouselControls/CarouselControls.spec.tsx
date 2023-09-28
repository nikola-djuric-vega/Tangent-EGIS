import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import CarouselControls from './CarouselControls'

describe('CarouselControls component', () => {
  test('test if forward button is disabled', async () => {
    const mockClick = jest.fn()
    const { getByTestId } = render(<CarouselControls id="test" disableRight />)
    expect(getByTestId('forwardButton').closest('button')).toBeDisabled()
  })
})

describe('CarouselControls component', () => {
  test('test if back button is disabled', async () => {
    const mockClick = jest.fn()
    const { getByTestId } = render(<CarouselControls id="test" disableLeft />)
    expect(getByTestId('backButton').closest('button')).toBeDisabled()
  })
})
