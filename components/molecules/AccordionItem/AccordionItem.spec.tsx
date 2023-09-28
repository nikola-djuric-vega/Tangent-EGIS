import React from 'react'
import { screen, render } from '@testing-library/react'
import { mockData } from './AccordionItem.mockData'

import AccordionItem from '../AccordionItem/AccordionItem'

describe('AccordionItem', () => {
  it('should render AccordionItem', () => {
    render(<AccordionItem {...mockData} />)
    expect(screen.getByText('Global leadership')).toBeTruthy()
  })
})
