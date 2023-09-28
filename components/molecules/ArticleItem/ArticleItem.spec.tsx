import React from 'react'
import { getByText, render } from '@testing-library/react'

import ArticleItem from './ArticleItem'
import Heading from '../../atoms/Heading/Heading'

const richTextContent1 = (
  <article
    className="prose"
    dangerouslySetInnerHTML={{
      __html:
        '<p class="body2">At consectetur lorem donec massa. Random words. Fames ac turpis egestas sed tempus urna et pharetra. Nisl suscipit adipiscing bibendum est. Ultrices in iaculis nunc sed augue. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Massa enim nec dui nunc mattis. Morbi enim nunc faucibus a pellentesque sit.</p><p>At consectetur lorem donec massa. Fames ac turpis egestas sed tempus urna et pharetra. Nisl suscipit adipiscing bibendum est. Ultrices in iaculis nunc sed augue. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Massa enim nec dui nunc mattis. Morbi enim nunc faucibus a pellentesque sit</p><p>At consectetur lorem donec massa. Fames ac turpis egestas sed tempus urna et pharetra. Nisl suscipit adipiscing bibendum est. Ultrices in iaculis nunc sed augue. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Massa enim nec dui nunc mattis. Morbi enim nunc faucibus a pellentesque sit.</p>',
    }}
  ></article>
)

describe('ArticleItem', () => {
  it('should render part of title value and part of rich text value', () => {
    const { getByText } = render(
      <div>
        <ArticleItem sideItem={<Heading level={6}>Our Approach</Heading>} bg>
          {richTextContent1}
        </ArticleItem>
      </div>
    )
    expect(getByText(/Our/)).toBeTruthy()
    expect(getByText(/Random words/)).toBeTruthy()
  })
})

describe('ArticleItem', () => {
  it('should render ArticleItem component and have bg class names', () => {
    const { getByTestId } = render(
      <div>
        <ArticleItem sideItem={<Heading level={6}>Our Approach</Heading>} bg>
          {richTextContent1}
        </ArticleItem>
      </div>
    )
    expect(getByTestId('article-item-child')).toHaveClass(
      'md:bg-steel-gray-lightest'
    )
  })

  it('should render ArticleItem component with stylised link', () => {
    const { getByText, getByTestId } = render(
      <div>
        <ArticleItem
          linkText="Article Item Text"
          linkTo="/article-item-text"
          sideItem={<Heading level={6}>Our Approach</Heading>}
          bg
        >
          {richTextContent1}
        </ArticleItem>
      </div>
    )
    expect(getByText(/Our/)).toBeTruthy()
    expect(getByText(/Random words/)).toBeTruthy()
    expect(getByTestId('stylised-link-item')).toBeTruthy()
  })
})
