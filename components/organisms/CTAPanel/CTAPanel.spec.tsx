import React from 'react'
import { render } from '@testing-library/react'
import CTAPanel from './CTAPanel'

describe('CTA Panel', () => {
  it('should render the CTAPanel component with grey background', () => {
    const { getByText, getByTestId } = render(
      <CTAPanel
        title="Join us."
        description="Support the transformation happening in cities and cummunities by contributing to complex and large-scale infrastructure projects globally."
        bgColor="grey"
        image={{ url: 'images/image-carousel-22.png' }}
        linkText="View roles"
        linkTo="http://google.com"
      />
    )
    expect(getByText(/Support the transformation/)).toBeTruthy()
    expect(getByTestId('background-test')).toHaveClass('bg-gray-lightest')
  })

  it('should render the CTAPanel component with light green background', () => {
    const { getByText, getByTestId } = render(
      <CTAPanel
        title="Join us."
        description="Support the transformation happening in cities and cummunities by contributing to complex and large-scale infrastructure projects globally."
        bgColor="lightGreen"
        image={{ url: 'images/image-carousel-22.png' }}
        linkText="View roles"
        linkTo="http://google.com"
      />
    )
    expect(getByText(/Support the transformation/)).toBeTruthy()
    expect(getByTestId('background-test')).toHaveClass('bg-super-lime-light')
  })

  it('should render the CTAPanel component with light blue background', () => {
    const { getByText, getByTestId } = render(
      <CTAPanel
        title="Join us."
        description="Support the transformation happening in cities and cummunities by contributing to complex and large-scale infrastructure projects globally."
        bgColor="lightBlue"
        image={{ url: 'images/image-carousel-22.png' }}
        linkText="View roles"
        linkTo="http://google.com"
      />
    )
    expect(getByText(/Support the transformation/)).toBeTruthy()
    expect(getByTestId('background-test')).toHaveClass('bg-steel-gray-lightest')
  })

  it('should render the CTAPanel component with internal link', () => {
    const { getByText, getByTestId } = render(
      <CTAPanel
        linkType="external"
        title="Join us."
        description="Support the transformation happening in cities and cummunities by contributing to complex and large-scale infrastructure projects globally."
        bgColor="lightBlue"
        image={{ url: 'images/image-carousel-22.png' }}
        linkText="View roles"
        linkTo="http://google.com"
      />
    )
    expect(getByText(/Support the transformation/)).toBeTruthy()
    expect(getByTestId('background-test')).toHaveClass('bg-steel-gray-lightest')
    expect(getByTestId('arrow-type')).toHaveClass('transform -rotate-45')
  })
})
