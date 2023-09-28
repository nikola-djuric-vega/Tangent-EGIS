import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import NavLinkDropdownDropdown from './NavLinkDropdown'
import data from './NavLinkDropdown.mockData'

export default {
  title: 'Molecules/NavLinkDropdown',
  component: NavLinkDropdownDropdown,
} as ComponentMeta<typeof NavLinkDropdownDropdown>

const Template: ComponentStory<typeof NavLinkDropdownDropdown> = (args) => (
  <div className="relative">
    <NavLinkDropdownDropdown {...args} />
  </div>
)

export const OneColumn = Template.bind({})
OneColumn.args = data.oneColumn

export const TwoColumn = Template.bind({})
TwoColumn.args = data.twoColumn

export const ThreeColumn = Template.bind({})
ThreeColumn.args = data.threeColumn
