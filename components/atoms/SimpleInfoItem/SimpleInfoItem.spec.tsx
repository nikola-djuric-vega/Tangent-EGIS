import React from 'react'
import { render } from '@testing-library/react'

import SimpleInfoItem from './SimpleInfoItem'

describe('SimpleInfoItem', () => {
  it('should render the title prop in the component', () => {
    const { getByText } = render(
      <SimpleInfoItem title="Home">
        <div className="col-span-5 py-4 sm:py-9 sm:border-l sm:border-gray-light">
          <p className="font-serif text-2xl font-normal leading-8 sm:text-3xl">
            Egis creates and operates intelligent infrastructures and buildings
            that impacts people&apos;s lives globally. Our mission is to
            imagine, create and achieve a sustainable future.
          </p>
        </div>
      </SimpleInfoItem>
    )
    expect(getByText('Home')).toBeTruthy()
  })

  it('should render the children prop in the component', () => {
    const { getByText } = render(
      <SimpleInfoItem title="Home">
        <div className="col-span-5 py-4 sm:py-9 sm:border-l sm:border-gray-light">
          <p className="font-serif text-2xl font-normal leading-8 sm:text-3xl">
            Egis creates and operates intelligent infrastructures and buildings
            that impacts people&apos;s lives globally. Our mission is to
            imagine, create and achieve a sustainable future.
          </p>
        </div>
      </SimpleInfoItem>
    )
    expect(getByText(/Egis/i)).toBeTruthy()
  })
})
