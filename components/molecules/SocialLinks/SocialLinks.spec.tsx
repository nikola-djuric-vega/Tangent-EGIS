import React from 'react'
import { render, screen } from '@testing-library/react'

import SocialLinks from './SocialLinks'

describe('SocialLinks', () => {
  test('it should render social links', async () => {
    const { container } = render(
      <SocialLinks
        socialLink={[
          { label: 'facebook', to: 'https://en-gb.facebook.com/egisgroup/' },
          { label: 'twitter', to: 'https://twitter.com/egis' },
          { label: 'linkedin', to: 'https://www.linkedin.com/company/egis/' },
        ]}
      />
    )
    expect(container.firstChild).toBeTruthy()
  })

  test('it should render dark vertical social links', async () => {
    const { container } = render(
      <SocialLinks
        variant="vertical"
        theme="dark"
        socialLink={[
          { label: 'facebook', to: 'share facebook' },
          { label: 'twitter', to: 'share twitter' },
          { label: 'linkedin', to: 'share linkedin' },
        ]}
      />
    )
    expect(container.firstChild).toBeTruthy()
  })
})
