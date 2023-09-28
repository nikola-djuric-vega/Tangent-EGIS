import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import NarrowVideoImageBanner from './NarrowVideoImageBanner'
import IntroductionBlock from '../../molecules/IntroductionBlock/IntroductionBlock'

export default {
  title: 'Organisms/Banners/NarrowVideoImageBanner',
  component: NarrowVideoImageBanner,
} as ComponentMeta<typeof NarrowVideoImageBanner>

const Template: ComponentStory<typeof NarrowVideoImageBanner> = (args) => (
  <NarrowVideoImageBanner {...args} />
)

export const SectorIntroduction = Template.bind({})
SectorIntroduction.args = {
  image: { narrow_banner_url: 'images/subsectorbanner.png' },
  introBlock: (
    <IntroductionBlock
      introductionText="The air transport sector is constantly evolving. It is subject to increasing constrains, whether related to security, safety or environmental impact. Egis provides its clients with a unique service due to its 360° expertise across all areas of the air transport sector: airports, air traffic management and air traffic operatioins."
      linktoUrl="http://google.com"
      linkText="Contact our Building team"
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
  ),
}

export const SubSectorIntroduction = Template.bind({})
SubSectorIntroduction.args = {
  image: { narrow_banner_url: 'images/subsectorbanner.png' },
  introBlock: (
    <IntroductionBlock
      introductionText="The air transport sector is constantly evolving. It is subject to increasing constrains, whether related to security, safety or environmental impact. Egis provides its clients with a unique service due to its 360° expertise across all areas of the air transport sector: airports, air traffic management and air traffic operatioins."
      linktoUrl="http://google.com"
      linkText="Contact our Aviation team"
    >
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html:
            '<p class="body3">A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport</p><p> infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a</p><p> network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world.</p><h6>Our expertise.</h6><ul><li>Policy & regulatory advisory</li><li>Business & technical strategy</li><li>Operational & technical change management</li><li>Master Planning</li><li>Project & programme management</li><li>Building design & engineering</li></ul>',
        }}
      ></div>
    </IntroductionBlock>
  ),
}

export const Video = Template.bind({})
Video.args = {
  title: 'JOINED IN 1998',
  subTitle: 'Edgar Smith',
  description: 'Europe Buildings Leader',
  role: 'Marketing, United Kingdom',
  image: { narrow_banner_url: 'images/subsectorbanner.png' },
  videoUrl: 'https://www.youtube.com/watch?v=5I7u5FMQxHA',
  introBlock: (
    <IntroductionBlock
      introductionText="The air transport sector is constantly evolving. It is subject to increasing constrains, whether related to security, safety or environmental impact. Egis provides its clients with a unique service due to its 360° expertise across all areas of the air transport sector: airports, air traffic management and air traffic operatioins."
      linktoUrl="http://google.com"
      linkText="Contact our Aviation team"
    >
      <div
        className="prose"
        dangerouslySetInnerHTML={{
          __html:
            '<p class="body3">A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport</p><p> infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a</p><p> network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world. A world-class airport infrastructure operator with a network of 17 mid-sized airports across the world.</p><h6>Our expertise.</h6><ul><li>Policy & regulatory advisory</li><li>Business & technical strategy</li><li>Operational & technical change management</li><li>Master Planning</li><li>Project & programme management</li><li>Building design & engineering</li></ul>',
        }}
      ></div>
    </IntroductionBlock>
  ),
}
