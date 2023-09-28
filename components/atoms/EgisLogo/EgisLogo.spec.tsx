import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import EgisLogo from './EgisLogo'

describe('EgisLogoComponent', () => {
  it('should render EgisLogo', () => {
    const { container } = render(<EgisLogo />)
    expect(container.firstChild).toBeTruthy()
  })
})
