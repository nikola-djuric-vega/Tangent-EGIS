import { render, screen } from '@testing-library/react'

import AnimatedBanner from './AnimatedBanner'
import { mockData } from './AnimatedBanner.mockData'

describe('AnimatedBanner', () => {
  it('should render AnimatedBanner component', () => {
    render(<AnimatedBanner {...mockData} />)
    expect(screen.getByText('Impact the future')).toBeTruthy()
  })
})
