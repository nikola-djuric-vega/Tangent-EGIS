import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import VideoPlayIcon from './VideoPlayIcon'

export default {
  title: 'Atoms/Icons/VideoPlayIcon',
  component: VideoPlayIcon,
} as ComponentMeta<typeof VideoPlayIcon>

const Template: ComponentStory<typeof VideoPlayIcon> = (args) => (
  <VideoPlayIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 70,
  height: 70,
}
