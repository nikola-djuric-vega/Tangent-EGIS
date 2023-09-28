import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import OverlayLinkGridList from './OverlayLinkGridList'
import { airportArray } from '../../molecules/LinkGridList/LinkGridList.mockData'

describe('Overlay Link Grid List', () => {
  it('should render the OverlayLinkGridList component', () => {
    const { getByText } = render(
      <OverlayLinkGridList
        stylisedLink={''}
        stylisedLinkUrl={''}
        title="Our airport list"
        linkGridArray={airportArray}
        buttonText="Read more"
        threeColumnLayout={false}
      />
    )
    expect(getByText('Our airport list')).toBeTruthy()
  })

  it('should press one item and open overlay', async () => {
    const { getAllByTestId } = render(
      <OverlayLinkGridList
        stylisedLink={''}
        stylisedLinkUrl={''}
        title="Our airport list"
        linkGridArray={airportArray}
        buttonText="Read more"
        threeColumnLayout={false}
      />
    )
    const readMoreButton = await getAllByTestId('link-grid-item')[0]

    if (readMoreButton) {
      await fireEvent.click(readMoreButton)
    }
  })
})
