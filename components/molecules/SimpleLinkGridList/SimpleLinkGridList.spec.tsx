import React from 'react'
import { screen, render } from '@testing-library/react'

import SimpleLinkGridList from './SimpleLinkGridList'
import { peopleArray } from '../SimpleLinkGridList/SimpleLinkGridList.mockData'

describe('ThreeColumnLayout', () => {
  it('should render LinkGridList component', () => {
    render(
      <SimpleLinkGridList
        linkGridArray={peopleArray}
        setOpen={() => jest.fn()}
        setSelectedItem={() => jest.fn()}
      />
    )
    expect(screen.getByText('Jane Doe')).toBeTruthy()
  })
})
