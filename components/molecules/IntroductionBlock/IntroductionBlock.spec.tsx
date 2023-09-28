import React from 'react'
import { render } from '@testing-library/react'
import IntroductionBlock from './IntroductionBlock'

describe('IntroductionBlock', () => {
  it('should render the IntroductionBlock component', () => {
    const { getByText } = render(
      <IntroductionBlock
        introductionText="hello world"
        linktoUrl="http://google.com"
        linkText="Contact our Building team"
        secondaryNavigationTitle="secondary title"
      >
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html:
              '<p class="body3">A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world.</p>',
          }}
        ></div>
      </IntroductionBlock>
    )
    expect(getByText('hello world')).toBeTruthy()
    expect(getByText(/airport/)).toBeTruthy()
  })
})
