import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchIcon from './SearchIcon'

export default {
  title: 'Atoms/Icons/SearchIcon',
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>

const Template: ComponentStory<typeof SearchIcon> = (args) => (
  <SearchIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 28,
  height: 28,
}
