import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NavLink from './NavLink'

export default {
  title: 'Atoms/NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>

const Template: ComponentStory<typeof NavLink> = (args) => (
  <div className="h-20 flex flex-row items-stretch relative">
    <NavLink {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  text: 'Link',
  url: 'index.html',
}

export const Bold = Template.bind({})
Bold.args = {
  text: 'Link',
  url: 'index.html',
  bold: true,
}

export const Light = Template.bind({})
Light.args = {
  text: 'Link',
  url: 'index.html',
  light: true,
}

export const LightBold = Template.bind({})
LightBold.args = {
  text: 'Link',
  url: 'index.html',
  bold: true,
  light: true,
}
