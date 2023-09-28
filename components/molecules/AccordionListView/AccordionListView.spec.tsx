import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import AccordionListView from './AccordionListView'

describe('AccordionListView', () => {
  it('should render AccordionListView component', () => {
    const mockFunction = jest.fn()

    const { getByText, getByRole } = render(
      <AccordionListView onClick={mockFunction} list={[{ title: 'Bulent' }]} />
    )
    expect(getByText('Bulent')).toBeTruthy()

    fireEvent.click(getByRole('button'))
    expect(mockFunction).toHaveBeenCalled()
  })
})
