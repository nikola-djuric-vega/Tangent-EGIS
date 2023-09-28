import React from 'react'
import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import LanguageSelector from './LanguageSelector'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  route: '/',
  locales: ['en', 'fr'],
  pathname: '',
  query: '',
  asPath: '',
  push: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
  },
  beforePopState: jest.fn(() => null),
  prefetch: jest.fn(() => null),
}))

const nookies = jest.spyOn(require('nookies'), 'parseCookies')

nookies.mockImplementation(() => ({
  cookieResponse: true,
}))

describe('LanguageSelector', () => {
  it('should render LanguageSelector', () => {
    render(<LanguageSelector light url_en="en" url_fr="fr" />)
    expect(screen.getByLabelText('Select a language')).toBeTruthy()
  })

  it('should click locale', async () => {
    const wrapper = render(<LanguageSelector light url_en="en" url_fr="fr" />)

    const firstLocale = wrapper.getAllByRole('link')[0]

    if (firstLocale) {
      fireEvent.click(firstLocale)
    }
    expect(firstLocale).toHaveAttribute('href')
  })
})
