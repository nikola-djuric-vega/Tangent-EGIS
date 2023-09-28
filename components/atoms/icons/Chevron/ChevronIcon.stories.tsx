import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ChevronIcon from './ChevronIcon'

export default {
  title: 'Atoms/Icons/ChevronIcon',
  component: ChevronIcon,
} as ComponentMeta<typeof ChevronIcon>

const Template: ComponentStory<typeof ChevronIcon> = (args) => (
  <ChevronIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 10,
  height: 7,
}
