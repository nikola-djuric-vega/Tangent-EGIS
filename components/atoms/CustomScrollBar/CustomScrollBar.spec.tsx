import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import CustomScrollBar from './CustomScrollBar'

describe('CustomScrollBar', () => {
  test('it should render custom scrollbar', async () => {
    const { container } = render(<CustomScrollBar scrollPos={0} />)
    expect(container.firstChild).toBeTruthy()
  })
})
