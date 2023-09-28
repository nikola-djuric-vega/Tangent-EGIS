import React from 'react'
import { render } from '@testing-library/react'

import SearchResult from './SearchResult'

const data = {
  linkTo: 'index.html',
  image: 'images/subsectorbanner.png',
  title: 'Aviation',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut sem vitae neque commodo commodo convallis dictum neque. Pellentesque ac enim mollis, condimentum tortor a, ornare leo. Mauris arcu dui, vestibulum ac purus nec, egestas porta felis. Quisque ut felis dapibus, finibus urna quis, bibendum neque. Nullam non augue neque. Proin lobortis efficitur lacus non tincidunt.',
  tag: 'Sector',
}

describe('SearchResult', () => {
  it('should render SearchResult component', () => {
    const { container } = render(<SearchResult {...data} />)
    expect(container.firstChild).toBeTruthy()
  })

  it('should render SearchResult with featured component', () => {
    const { container } = render(<SearchResult {...data} featured />)
    expect(container.firstChild).toBeTruthy()
  })
})
