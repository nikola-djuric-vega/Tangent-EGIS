import { ComponentMeta, ComponentStory } from '@storybook/react'

import BannerTimelineItem from './BannerTimelineItem'
import React from 'react'

export default {
  title: 'Atoms/BannerTimelineItem',
  component: BannerTimelineItem,
} as ComponentMeta<typeof BannerTimelineItem>

const Template: ComponentStory<typeof BannerTimelineItem> = (args) => (
  <div className="md:w-96 bg-midnight-blue">
    <BannerTimelineItem {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  number: 1,
  title: 'New strategic acquisition in Australia',
}

export const Active = Template.bind({})
Active.args = {
  number: 1,
  title: 'New strategic acquisition in Australia',
  active: true,
}
