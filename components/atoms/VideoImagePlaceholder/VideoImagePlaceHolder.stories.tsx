import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import VideoImagePlaceHolder from './VideoImagePlaceHolder'

export default {
  title: 'Atoms/VideoImagePlaceholder',
  component: VideoImagePlaceHolder,
} as ComponentMeta<typeof VideoImagePlaceHolder>

const Template: ComponentStory<typeof VideoImagePlaceHolder> = (args) => (
  <VideoImagePlaceHolder {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  showPlayIcon: true,
  image: 'images/subsectorbanner.png',
  supportingText:
    'Loremm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus.',
}
