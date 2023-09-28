import React from 'react'
import { render } from '@testing-library/react'

import ArrowIcon from './ArrowIcon'

describe('ArrowIconComponent', () => {
  it('should render an svg', () => {
    const { container } = render(<ArrowIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})

describe('ArrowIcon', () => {
  it('should render an svg', () => {
    const { container } = render(<ArrowIcon />)
    expect(container.firstChild).toBeTruthy()
  })
})

describe('ArrowIconCarouselLeft', () => {
  it('should render arrow icon carousel left', () => {
    const { container } = render(<ArrowIcon backgroundColor="teal-blue" />)
    expect(container.firstChild).toBeTruthy()
  })
})

describe('ArrowIconCarouselRight', () => {
  it('should render arrow icon carousel right', () => {
    const { container } = render(<ArrowIcon rightArrow />)
    expect(container.firstChild).toBeTruthy()
  })
})

describe('ArrowIcon', () => {
  it('should render raw arrow icon', () => {
    const { container } = render(<ArrowIcon rightArrow />)
    expect(container.firstChild).toBeTruthy()
  })
})

describe('ArrowIconExternal', () => {
  it('should render external arrow', () => {
    const { container } = render(<ArrowIcon angle />)
    expect(container.firstChild).toBeTruthy()
  })
})
