import React from 'react'
import { render } from '@testing-library/react'
import NarrowVideoImageBanner from './NarrowVideoImageBanner'
import IntroductionBlock from '../../molecules/IntroductionBlock/IntroductionBlock'

describe('Narrow Image Banner', () => {
  it('should render the NarrowVideoImageBanner component with introBlock', () => {
    const { getByText } = render(
      <NarrowVideoImageBanner
        image={{
          narrow_banner_url: 'images/subsectorbanner.png',
          umbracoAlternateText: 'umbracoAlternateText',
        }}
        introBlock={
          <IntroductionBlock
            introductionText="The air transport sector is constantly evolving. It is subject to increasing constrains, whether related to security, safety or environmental impact. Egis provides its clients with a unique service due to its 360° expertise across all areas of the air transport sector: airports, air traffic management and air traffic operatioins."
            linktoUrl="http://google.com"
            linkText="Contact our building team"
            secondaryNavigationTitle="Building sub-sectors"
          >
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html:
                  '<p class="body3">A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport</p><p> infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a</p><p> network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world.</p><h6>Our expertise.</h6><ul><li>Policy & regulatory advisory</li><li>Business & technical strategy</li><li>Operational & technical change management</li><li>Master Planning</li><li>Project & programme management</li><li>Building design & engineering</li></ul>',
              }}
            ></div>
          </IntroductionBlock>
        }
      />
    )
    expect(getByText('Building sub-sectors')).toBeTruthy()
  })
})
