import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import CookieBanner from './CookieBanner'

const cookieText =
  '<h6>We use cookies on our website</h6>\n<p class="body3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="/home-page/privacy-policy/" title="Cookie policy">Link to cookies</a>, quis nostrud exercitation.</p>\n<p class="body3">By choosing “Yes, I agree”, you consent to our use of cookies.</p>'

describe('CookieBanner', () => {
  it('should render CookieBanner component', () => {
    const mockClick = jest.fn()
    const mockClickDeny = jest.fn()

    const { getByText } = render(
      <CookieBanner
        visible={true}
        cookieText={cookieText}
        agreeButtonText="Yes, I agree"
        denyButtonText="Deny cookies"
        handleAgree={mockClick}
        handleDeny={mockClickDeny}
      />
    )

    expect(screen.getByText('We use cookies on our website')).toBeTruthy()

    fireEvent.click(getByText('Yes, I agree'))
    fireEvent.click(getByText('Deny cookies'))
    expect(mockClick.mock.calls.length).toBe(1)
    expect(mockClickDeny.mock.calls.length).toBe(1)
  })

  it('should not render CookieBanner component', () => {
    const mockClick = jest.fn()
    const mockClickDeny = jest.fn()
    const { container } = render(
      <CookieBanner
        visible={false}
        cookieText={cookieText}
        agreeButtonText="Yes, I agree"
        denyButtonText="Deny cookies"
        handleAgree={mockClick}
        handleDeny={mockClickDeny}
      />
    )

    expect(container.firstChild).toHaveClass('hidden')
  })
})
