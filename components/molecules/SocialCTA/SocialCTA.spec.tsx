import React from 'react'
import { render } from '@testing-library/react'

import SocialCTA from './SocialCTA'

describe('SocialCTA', () => {
  it('should render social cta with facebook content', () => {
    const { getByText, queryByText } = render(
      <SocialCTA
        title="Facebook"
        linkTo="Facebook"
        text="Facebook CTA body text"
        type="facebook"
      />
    )
    expect(getByText('Facebook')).toBeTruthy()
    expect(getByText('Facebook CTA body text')).toBeTruthy()
    expect(queryByText('Twitter CTA body text')).not.toBeInTheDocument()
  })

  it('should render social cta with twitter content', () => {
    const { getByText, queryByText } = render(
      <SocialCTA
        title="Twitter"
        linkTo="Twitter"
        text="Twitter CTA body text"
        type="twitter"
      />
    )
    expect(getByText('Twitter')).toBeTruthy()
    expect(getByText('Twitter CTA body text')).toBeTruthy()
    expect(queryByText('Facebook CTA body text')).not.toBeInTheDocument()
  })

  it('should render social cta with linkedin content', () => {
    const { getByText, queryByText } = render(
      <SocialCTA
        title="LinkedIn"
        linkTo="LinkedIn"
        text="LinkedIn CTA body text"
        type="linkedin"
      />
    )
    expect(getByText('LinkedIn')).toBeTruthy()
    expect(getByText('LinkedIn CTA body text')).toBeTruthy()
    expect(queryByText('Twitter CTA body text')).not.toBeInTheDocument()
  })
})
