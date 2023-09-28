import React from 'react'
import { render } from '@testing-library/react'

import LinkGridList, { LinkGridItemProps } from './LinkGridList'

const testArray: LinkGridItemProps[] = [
  {
    title: 'Larnaca International Airport',
    subTitle: 'Cyprus',
    image: { url: 'test-image.png' },
    content: '<div></div>',
    showLink: true,
  },
  {
    title: 'Ostend-Bruges International Airport',
    subTitle: 'Belgium',
    image: { url: 'test-image.png' },
    content: '<div></div>',
    showLink: true,
  },
  {
    title: 'Quimper-Cornouaille Airport',
    subTitle: 'France',
    image: { url: 'test-image.png' },
    content: '<div></div>',
    showLink: false,
  },
]

describe('ThreeColumnLayout', () => {
  it('should render LinkGridList component', () => {
    const { getByText } = render(
      <LinkGridList
        bg
        title="Our list of airports."
        linkGridArray={testArray}
        stylisedLink="Read more"
        stylisedLinkUrl="link"
        twoColumnLayout={true}
        setOpen={() => jest.fn()}
        setSelectedItem={() => jest.fn()}
      />
    )
    expect(getByText('Larnaca International Airport')).toBeTruthy()
    expect(getByText('Ostend-Bruges International Airport')).toBeTruthy()
    expect(getByText('Quimper-Cornouaille Airport')).toBeTruthy()
  })
})
