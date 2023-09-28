import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import LocationFinder from './LocationFinder'
import {
  continentsMockData,
  countriesMockData,
  regionsMockData,
  testMockData,
  oneContinentMockData,
} from './LocationFinder.mockData'

describe('LocationFinder', () => {
  it('should render LocationFinder', () => {
    const { container } = render(<LocationFinder {...testMockData} />)
    expect(container.firstChild).toBeTruthy()
  })

  it('should render all stages of component', async () => {
    const { getAllByRole } = render(<LocationFinder {...testMockData} />)
    const continentButton = getAllByRole('button').find(
      (item) => item.textContent === 'Europe'
    )

    if (continentButton) {
      await fireEvent.click(continentButton)

      const countryButton = await getAllByRole('button').find(
        (item) => item.textContent === 'United Kingdom'
      )

      if (countryButton) {
        await fireEvent.click(countryButton)

        const regionButton = await getAllByRole('button').find(
          (item) => item.textContent === 'Wales'
        )
        if (regionButton) {
          await fireEvent.click(regionButton)
        }
      }
    }
  })

  it('should press backbutton', async () => {
    const { getByTestId, getAllByRole } = render(
      <LocationFinder {...testMockData} />
    )

    const continentButton = getAllByRole('button').find(
      (item) => item.textContent === 'Europe'
    )

    if (continentButton) {
      await fireEvent.click(continentButton)
      await fireEvent.click(getByTestId('back-button'))
    }
  })

  it('should load only one continent', async () => {
    const { container } = render(<LocationFinder {...oneContinentMockData} />)

    expect(container.firstChild).toBeTruthy()
  })
})
