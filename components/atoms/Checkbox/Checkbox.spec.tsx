import React from 'react'
import { render } from '@testing-library/react'

import Checkbox from './Checkbox'

describe('Checkbox', () => {
  test('it should render radio button', async () => {
    const { container } = render(
      <Checkbox
        text="Option 1"
        id="checkbox"
        name="checkbox"
        value="Option 1"
      />
    )
    expect(container.firstChild).toBeTruthy()
  })
})
