import React from 'react'
import { screen, render } from '@testing-library/react'

import EventDetail from './EventDetail'

describe('EventDetail', () => {
  it('should render EventDetail', () => {
    render(
      <EventDetail
        date="2021-02-17T00:00:00Z"
        time="9.00 - 11.00 GMT"
        registerLink={{ url: '/', name: 'Register' }}
      />
    )
    expect(screen.getByText('Register')).toBeTruthy()
  })
})
