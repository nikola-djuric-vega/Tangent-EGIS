import { render, screen } from '@testing-library/react'

import Breadcrumb from './Breadcrumb'
import React from 'react'

describe('Breadcrumb', () => {
  it('should render Breadcrumb component', () => {
    render(
      <Breadcrumb
        breadcrumbs={[
          {
            url: 'index.html',
            text: 'EVENTS ',
          },
          {
            url: 'index.html',
            text: 'WEBINAR RECORDINGS',
          },
          {
            url: '',
            text: 'HOW VIRTUAL REALITY SECURES',
          },
        ]}
      />
    )

    expect(screen.getByText('EVENTS')).toBeTruthy()
  })
})

describe('Breadcrumb', () => {
  it('should render Breadcrumb component', () => {
    render(
      <Breadcrumb
        breadcrumbs={[
          {
            url: 'index.html',
            text: 'EVENTS ',
          },
          {
            url: 'index.html',
            text: 'WEBINAR RECORDINGS',
          },
          {
            url: '',
            text: 'HOW VIRTUAL REALITY SECURES',
          },
        ]}
      />
    )

    expect(screen.getByText('WEBINAR RECORDINGS')).toBeTruthy()
  })
})

describe('Breadcrumb', () => {
  it('should render Breadcrumb component', () => {
    const { getByText } = render(
      <Breadcrumb
        breadcrumbs={[
          {
            url: 'index.html',
            text: 'EVENTS ',
          },
          {
            url: 'index.html',
            text: 'WEBINAR RECORDINGS',
          },
          {
            url: '',
            text: 'HOW VIRTUAL REALITY SECURES',
          },
        ]}
      />
    )

    expect(getByText('HOW VIRTUAL REALITY SECURES')).toBeTruthy()
  })
})
