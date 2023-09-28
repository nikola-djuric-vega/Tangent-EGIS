import React from 'react'
import { render } from '@testing-library/react'

import Recaptcha from './Recaptcha'

describe('Recaptcha', () => {
  it('should render Recaptcha', () => {
    const { container } = render(
      <Recaptcha>
        <div>recaptcha child</div>
      </Recaptcha>
    )
    expect(container.firstChild).toBeTruthy()
  })
})
