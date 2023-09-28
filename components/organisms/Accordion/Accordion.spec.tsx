import React from 'react'
import { screen, render } from '@testing-library/react'
import { peopleMockData, awardsMockData } from './Accordion.mockData'

import Accordion from '../Accordion/Accordion'

describe('Accordion', () => {
  it('should render people Accordion', () => {
    render(<Accordion {...peopleMockData} />)
    expect(screen.getByText('Global leadership')).toBeTruthy()
  })
  it('should render awards Accordion', () => {
    render(<Accordion {...awardsMockData} />)
    expect(screen.getByText('2021')).toBeTruthy()
  })
})
