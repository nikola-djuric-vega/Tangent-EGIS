import React from 'react'
import { render } from '@testing-library/react'

import FeaturedCard from './FeaturedCard'
import TagLine from '../../atoms/TagLine/TagLine'

describe('FeaturedCard', () => {
  it('should render FeaturedCard component description', () => {
    const { getByText } = render(
      <FeaturedCard
        height={384}
        width={200}
        linkTo="index.html"
        image={{
          featured_url: 'test-image.png',
          featured_secondary_listing_image: 'test-image.png',
          blur_url: 'test-image.png',
          featured_listing_image: 'test-image.png',
        }}
        description="hello world"
        hideDetails
        title="Featured Card"
      />
    )
    expect(getByText('hello world')).toBeTruthy()
  })

  it('FeaturedCard shall render image src and alt values', () => {
    const { getByRole } = render(
      <FeaturedCard
        subTitle="subtitle"
        secondary
        width={100}
        linkTo="index.html"
        image={{
          blur_url: 'test-image.png',
          featured_url: 'test-image.png',
          featured_secondary_listing_image: 'test-image.png',
          featured_listing_image: 'test-image.png',
          umbracoFile: { featured_url: 'test-image.png' },
        }}
        tagline={<TagLine additionalInfo="info" />}
      />
    )
    expect(getByRole('img')).toBeTruthy()
  })
})
