import { render, screen } from '@testing-library/react'

import LargeVideoImageBanner from './LargeVideoImageBanner'
import React from 'react'

describe('LargeVideoImageBanner', () => {
  it('sould render LargeVideoImageBanner component', () => {
    render(
      <LargeVideoImageBanner
        imageAltText="image text"
        image={'./images/image-content-break-image-test.png'}
        shareText="Share the project"
        socialLinks={[
          { label: 'facebook', to: 'share facebook link' },
          { label: 'twitter', to: 'share twitter link' },
          { label: 'linkedin', to: 'share linkedin link' },
        ]}
      />
    )

    expect(screen.getByText('SHARE THE PROJECT')).toBeTruthy()
  })
})

describe('LargeVideoImageBanner', () => {
  it('sould render LargeVideoImageBanner component with video', () => {
    render(
      <LargeVideoImageBanner
        imageAltText="image text"
        image={'./images/image-content-break-image-test.png'}
        shareText="Share"
        socialLinks={[
          { label: 'facebook', to: 'share facebook link' },
          { label: 'twitter', to: 'share twitter link' },
          { label: 'linkedin', to: 'share linkedin link' },
        ]}
        videoUrl={'https://www.youtube.com/watch?v=XA625ooKqSw'}
      />
    )

    expect(screen.getByText('SHARE')).toBeTruthy()
  })
})
