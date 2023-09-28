import React from 'react'
import { render } from '@testing-library/react'

import TranslationGlobe from './TranslationGlobe'

describe('TranslationGlobe', () => {
  it('should render an svg', () => {
    const { container } = render(<TranslationGlobe />)
    expect(container.firstChild).toBeTruthy()
  })
})
