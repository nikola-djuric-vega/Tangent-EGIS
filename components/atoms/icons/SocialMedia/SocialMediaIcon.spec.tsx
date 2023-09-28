import React from 'react'
import { render } from '@testing-library/react'

import SocialMediaIcon from './SocialMediaIcon'

describe('SocialMediaIconFacebook', () => {
  it('should render facebook icon', () => {
    const { container } = render(<SocialMediaIcon type="facebook" />)
    expect(container.firstChild).toBeTruthy()
  })
})

describe('SocialMediaIconTwitter', () => {
  it('should render twitter icon', () => {
    const { container } = render(<SocialMediaIcon type="twitter" />)
    expect(container.firstChild).toBeTruthy()
  })
})

describe('SocialMediaIconLinkedin', () => {
  it('should render linkedin icon', () => {
    const { container } = render(<SocialMediaIcon type="linkedin" />)
    expect(container.firstChild).toBeTruthy()
  })
})

describe('SocialMediaIconSubscribe', () => {
  it('should render subscribe icon', () => {
    const { container } = render(<SocialMediaIcon type="subscribe" />)
    expect(container.firstChild).toBeTruthy()
  })
})
