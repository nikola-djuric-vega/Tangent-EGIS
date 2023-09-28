import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import RadioButton from './RadioButton'

describe('RadioButton', () => {
  test('it should render radio button', async () => {
    const { container, getByTestId } = render(
      <RadioButton
        setOption={(option) => jest.fn()}
        name="checkbox"
        value="Option 1"
      />
    )

    const inputField: any = getByTestId('radiobutton-test')

    expect(container.firstChild).toBeTruthy()
    fireEvent.click(inputField)
  })
})
