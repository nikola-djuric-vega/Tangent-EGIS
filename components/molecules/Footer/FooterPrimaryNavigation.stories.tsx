import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import FooterPrimaryNavigation from './FooterPrimaryNavigation'

import { data } from './FooterPrimaryNavigation.mockData'

export default {
  title: 'Molecules/Footer/FooterPrimaryNavigation',
  component: FooterPrimaryNavigation,
} as ComponentMeta<typeof FooterPrimaryNavigation>

const Template: ComponentStory<typeof FooterPrimaryNavigation> = (args) => (
  <div className="bg-midnight-blue h-screen">
    <FooterPrimaryNavigation {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = data
