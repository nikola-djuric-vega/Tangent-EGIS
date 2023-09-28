import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { mockData } from './BannerTimeline.mockData'

import BannerTimeline from '../BannerTimeline/BannerTimeline'

export default {
  title: 'Molecules/BannerTimeline',
  component: BannerTimeline,
} as ComponentMeta<typeof BannerTimeline>

const Template: ComponentStory<typeof BannerTimeline> = (args) => (
  <div className="bg-midnight-blue md:left-midnight-blue overflow-hidden">
    <div className="container">
      <div className="grid grid-cols-5 md:grid-cols-10 gap-10">
        <div className="col-span-full md:col-span-6">
          <BannerTimeline {...args} />
        </div>
      </div>
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = mockData
