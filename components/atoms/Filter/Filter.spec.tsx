import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Filter from './Filter'
import { Locations } from './Filter.mockData'

describe('DropdownComponent', () => {
  it('should render dropdown', () => {
    render(<Filter {...Locations} />)
  })

  it('should open filter', async () => {
    const { getByTestId, getAllByTestId } = render(<Filter {...Locations} />)

    const button = await fireEvent.click(getByTestId('dropdown-btn'))

    if (button) {
      await fireEvent.click(getAllByTestId('option-btn')[0])

      fireEvent.keyDown(getAllByTestId('option-btn')[0], {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27,
      })
    }
  })

  it('should fire button presses', async () => {
    const { getByTestId } = render(<Filter {...Locations} />)

    fireEvent.keyDown(getByTestId('dropdown-options'), {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    })

    fireEvent.keyDown(getByTestId('dropdown-options'), {
      key: 'Enter',
      code: 'Enter',
      keyCode: 13,
      charCode: 13,
    })

    fireEvent.keyDown(getByTestId('dropdown-options'), {
      key: 'Tab',
      code: 'Tab',
      keyCode: 9,
      charCode: 9,
    })
  })

  it('should press close button', () => {
    const { getByTestId, container } = render(<Filter {...Locations} />)

    const button = fireEvent.click(getByTestId('close-btn'))

    expect(container.firstChild).toBeTruthy()
  })
})
