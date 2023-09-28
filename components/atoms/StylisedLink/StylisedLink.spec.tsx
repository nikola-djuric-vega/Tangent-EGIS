import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import StylisedLink from './StylisedLink'
import ArrowIcon from '../icons/Arrow/ArrowIcon'

describe('ButtonComponent', () => {
  test('it should render a primary stylisedLink', async () => {
    const { getByText } = render(
      <StylisedLink
        type="primary"
        linkText="primary"
        linkTo="http://google.com"
        backgroundColour="super-lime"
        hoverColour="midnight-blue"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:super-lime"
      />
    )
    const TestStylisedLink = getByText('primary')
    expect(TestStylisedLink).toBeInTheDocument()
  })

  test('it should render a primary stylisedLink with a icon', async () => {
    const { getByText } = render(
      <StylisedLink
        type="primary"
        linkText="primary"
        linkTo="http://google.com"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-white"
        hoverColour="hover:bg-midnight-blue"
        onlyBorder
        icon={<ArrowIcon rightArrow width={17} height={20} />}
      />
    )
    const TestStylisedLink = getByText('primary')
    expect(TestStylisedLink).toBeInTheDocument()
  })

  test('it should render a secondary stylisedLink', async () => {
    const { getByText } = render(
      <StylisedLink
        type="secondary"
        linkText="secondary"
        linkTo="http://google.com"
        backgroundColour="bg-super-lime"
        hoverColour="bg-midnight-blue"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-super-lime"
        icon={<ArrowIcon rightArrow width={17} height={20} />}
      />
    )
    const TestStylisedLink = getByText('secondary')
    expect(TestStylisedLink).toBeInTheDocument()
  })

  test('it should render a tertiary stylisedLink', async () => {
    const { getByText } = render(
      <StylisedLink
        type="tertiary"
        linkText="tertiary"
        linkTo="http://google.com"
      />
    )
    const TestButton = getByText('tertiary')
    expect(TestButton).toBeInTheDocument()
  })

  test('it should perform mouse over and change background colour to hover colour', async () => {
    const { container } = render(
      <StylisedLink
        type="primary"
        linkText="mousehover"
        linkTo="http://google.com"
        backgroundColour="bg-super-lime"
        hoverColour="bg-midnight-blue"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-super-lime"
        icon={<ArrowIcon rightArrow width={17} height={20} />}
      />
    )
    fireEvent.mouseOver(screen.getByText('mousehover'))
    await waitFor(() => screen.getByTestId('stylised-link-item'))
    expect(container.firstChild).toHaveClass('hover:bg-midnight-blue')
  })

  test('it should perform mouse leave and change background colour to initial colour', async () => {
    const { container } = render(
      <StylisedLink
        type="primary"
        linkText="mousehover"
        linkTo="http://google.com"
        backgroundColour="bg-super-lime"
        hoverColour="bg-midnight-blue"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-super-lime"
        icon={<ArrowIcon rightArrow width={17} height={20} />}
      />
    )
    fireEvent.mouseLeave(screen.getByText('mousehover'))
    await waitFor(() => screen.getByTestId('stylised-link-item'))
  })
})
