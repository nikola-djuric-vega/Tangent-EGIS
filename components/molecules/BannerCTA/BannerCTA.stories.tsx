import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { mockData } from './BannerCTA.mockData'

import BannerCTA from '../BannerCTA/BannerCTA'

export default {
  title: 'Molecules/BannerCTA',
  component: BannerCTA,
} as ComponentMeta<typeof BannerCTA>

const Template: ComponentStory<typeof BannerCTA> = (args) => (
  <div className="bg-black">
    <div className="container">
      <BannerCTA {...args} />
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = mockData
