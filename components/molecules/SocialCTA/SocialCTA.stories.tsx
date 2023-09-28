import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SocialCTA from './SocialCTA'

export default {
  title: 'Molecules/SocialCTA',
  component: SocialCTA,
} as ComponentMeta<typeof SocialCTA>

const Template: ComponentStory<typeof SocialCTA> = (args) => (
  <SocialCTA {...args} />
)

export const Facebook = Template.bind({})
Facebook.args = {
  linkTo: 'social media link',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam distinctio ut nam quae necessitatibus quasi!',
  title: 'Facebook',
  type: 'facebook',
}

export const Twitter = Template.bind({})
Twitter.args = {
  linkTo: 'social media link',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam distinctio ut nam quae necessitatibus quasi!',
  title: 'Twitter',
  type: 'twitter',
}

export const LinkedIn = Template.bind({})
LinkedIn.args = {
  linkTo: 'social media link',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam distinctio ut nam quae necessitatibus quasi!',
  title: 'LinkedIn',
  type: 'linkedin',
}
