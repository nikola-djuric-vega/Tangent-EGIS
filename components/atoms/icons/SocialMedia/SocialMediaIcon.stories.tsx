import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SocialMedia from './SocialMediaIcon'

export default {
  title: 'Atoms/Icons/SocialMediaIcon',
  component: SocialMedia,
} as ComponentMeta<typeof SocialMedia>

const Template: ComponentStory<typeof SocialMedia> = (args) => (
  <SocialMedia {...args} />
)

export const Facebook = Template.bind({})
Facebook.args = {
  width: 19,
  height: 19,
  type: 'facebook',
}

export const Twitter = Template.bind({})
Twitter.args = {
  width: 19,
  height: 19,
  type: 'twitter',
}

export const Linkedin = Template.bind({})
Linkedin.args = {
  width: 19,
  height: 19,
  type: 'linkedin',
}

export const Subscribe = Template.bind({})
Subscribe.args = {
  width: 16,
  height: 12,
  type: 'subscribe',
}
