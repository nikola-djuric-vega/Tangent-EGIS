import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import OverlaySlider from './OverlaySlider'

describe('OverlaySlider', () => {
  function MockComponent() {
    return <div className="bg-teal-blue">render me</div>
  }

  const mockFunction = jest.fn()
  it('should render OverlaySlider', () => {
    const { getByRole } = render(
      <OverlaySlider isSliderOpen={true} setIsOpenSlider={mockFunction}>
        <MockComponent />
      </OverlaySlider>
    )

    fireEvent.click(getByRole('button'))
    expect(mockFunction).toHaveBeenCalled()
  })

  it('should close overlayslider', () => {
    const { getByTestId } = render(
      <OverlaySlider isSliderOpen={true} setIsOpenSlider={mockFunction}>
        <MockComponent />
      </OverlaySlider>
    )

    fireEvent.click(getByTestId('background-btn'))
    expect(mockFunction).toHaveBeenCalled()
  })
})
