import React from 'react'
import { render, screen } from '@testing-library/react'

import AccordionItem from './AccordionItem'
import ArrowIcon from '../icons/Arrow/ArrowIcon'

describe('AccordionItem', () => {
  it('should render AccordionItem component', () => {
    const { getByText } = render(
      <AccordionItem icon={<ArrowIcon />} text="Asia" />
    )
    expect(getByText('Asia')).toBeTruthy()
  })
})
