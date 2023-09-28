// Button.test.tsx (Note that tests are colocated with components)
import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import Button from './Button'
import ArrowIcon from '../icons/Arrow/ArrowIcon'

describe('ButtonComponent', () => {
  test('it should render a primary button', async () => {
    const mockClick = jest.fn()
    const { getByText } = render(
      <Button
        onClick={mockClick}
        type="primary"
        buttonText="primary"
        backgroundColour="bg-super-lime"
        hoverColour="bg-midnight-blue"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-super-lime"
      />
    )
    const TestButton = getByText('primary')
    expect(TestButton).toBeInTheDocument()
    expect(TestButton).toMatchSnapshot()
  })

  test('it should render a primary button with a icon', async () => {
    const mockClick = jest.fn()
    const { getByText } = render(
      <Button
        type="primary"
        buttonText="primary"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-white"
        hoverColour="bg-midnight-blue"
        onlyBorder
        onClick={mockClick}
        icon={<ArrowIcon rightArrow width={17} height={20} />}
      />
    )
    const TestButton = getByText('primary')
    expect(TestButton).toBeInTheDocument()
    expect(TestButton).toMatchSnapshot()
  })

  test('it should render a secondary button', async () => {
    const mockClick = jest.fn()
    const { getByText } = render(
      <Button
        type="primary"
        buttonText="secondary"
        backgroundColour="bg-super-lime"
        hoverColour="bg-midnight-blue"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-super-lime"
        onClick={mockClick}
        icon={<ArrowIcon rightArrow width={17} height={20} />}
      />
    )
    const TestButton = getByText('secondary')
    expect(TestButton).toBeInTheDocument()
    expect(TestButton).toMatchSnapshot()
  })

  test('it should render a tertiary button', async () => {
    const mockClick = jest.fn()
    const { getByText } = render(
      <Button type="tertiary" buttonText="tertiary" onClick={mockClick} />
    )
    const TestButton = getByText('tertiary')
    expect(TestButton).toBeInTheDocument()
    expect(TestButton).toMatchSnapshot()
  })

  test('it should perform the passed onClick function', async () => {
    const mockClick = jest.fn()
    const { getByText } = render(
      <Button
        onClick={mockClick}
        type="primary"
        buttonText="onClick"
        backgroundColour="bg-super-lime"
        hoverColour="bg-midnight-blue"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-super-lime"
        icon={<ArrowIcon rightArrow width={17} height={20} />}
      />
    )
    fireEvent.click(getByText('onClick'))
    expect(mockClick.mock.calls.length).toBe(1)
  })

  test('it should perform mouse over and change background colour to hover colour', async () => {
    const mockClick = jest.fn()
    const { container } = render(
      <Button
        onClick={mockClick}
        type="primary"
        buttonText="mousehover"
        backgroundColour="bg-super-lime"
        hoverColour="hover:bg-midnight-blue"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-super-lime"
        icon={<ArrowIcon rightArrow width={17} height={20} />}
      />
    )
    fireEvent.mouseOver(screen.getByText('mousehover'))
    await waitFor(() => screen.getByTestId('button-item'))
    expect(container.firstChild).toHaveClass('hover:bg-midnight-blue')
  })

  test('it should perform mouse leave and change colour back to background colour', async () => {
    const mockClick = jest.fn()
    const { container } = render(
      <Button
        onClick={mockClick}
        type="primary"
        buttonText="mousehover"
        backgroundColour="bg-super-lime"
        hoverColour="bg-midnight-blue"
        textColour="text-midnight-blue"
        textHoverColour="group-hover:text-super-lime"
        icon={<ArrowIcon rightArrow width={17} height={20} />}
      />
    )
    fireEvent.mouseLeave(screen.getByText('mousehover'))
    await waitFor(() => screen.getByTestId('button-item'))
    expect(container.firstChild).toHaveClass('bg-super-lime')
  })
})
