import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import FooterLegalLinks from './FooterLegalLinks'
import { data } from './FooterLegalLinks.mockData'

export default {
  title: 'Molecules/Footer/FooterLegalLinks',
  component: FooterLegalLinks,
} as ComponentMeta<typeof FooterLegalLinks>

const Template: ComponentStory<typeof FooterLegalLinks> = (args) => (
  <div className="bg-midnight-blue h-screen">
    <FooterLegalLinks {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = data
