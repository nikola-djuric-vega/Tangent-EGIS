import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SocialLinks from './SocialLinks'

export default {
  title: 'Molecules/SocialLinks',
  component: SocialLinks,
} as ComponentMeta<typeof SocialLinks>

const Template: ComponentStory<typeof SocialLinks> = (args) => (
  <SocialLinks {...args} />
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  variant: 'horizontal',
  theme: 'dark',
  socialLink: [
    { label: 'facebook', to: 'https://en-gb.facebook.com/egisgroup/' },
    { label: 'twitter', to: 'https://twitter.com/egis' },
    { label: 'linkedin', to: 'https://www.linkedin.com/company/egis/' },
  ],
}

export const Vertical = Template.bind({})
Vertical.args = {
  variant: 'vertical',
  theme: 'dark',
  text: 'share',
  socialLink: [
    { label: 'facebook', to: 'share facebook link' },
    { label: 'twitter', to: 'share twitter link' },
    { label: 'linkedin', to: 'share linkedin link' },
  ],
}
