import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import IntroductionBlock from './IntroductionBlock'

export default {
  title: 'Molecules/IntroductionBlock',
  component: IntroductionBlock,
} as ComponentMeta<typeof IntroductionBlock>

const Template: ComponentStory<typeof IntroductionBlock> = (args) => (
  <IntroductionBlock {...args}></IntroductionBlock>
)

export const Primary = Template.bind({})
Primary.args = {
  linktoUrl: 'http://google.com',
  linkText: 'Contact our Building team',
  introductionText:
    'The air transport sector is constantly evolving. It is subject to increasing constrains, whether related to security, safety or environmental impact. Egis provides its clients with a unique service due to its 360° expertise across all areas of the air transport sector: airports, air traffic management and air traffic operatioins.',
  secondaryNavigationTitle: 'Building sub-sectors',
  subSectorLinks: [{ name: 'Test', url: '/test' }],
  children: (
    <div
      className="prose"
      dangerouslySetInnerHTML={{
        __html:
          '<p class="body3">A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport</p><p> infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a</p><p> network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world.</p><h6>Our expertise.</h6><ul><li>Policy & regulatory advisory</li><li>Business & technical strategy</li><li>Operational & technical change management</li><li>Master Planning</li><li>Project & programme management</li><li>Building design & engineering</li></ul>',
      }}
    ></div>
  ),
}
