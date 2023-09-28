import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CalendarIcon from './CalendarIcon'

export default {
  title: 'Atoms/Icons/CalendarIcon',
  component: CalendarIcon,
} as ComponentMeta<typeof CalendarIcon>

const Template: ComponentStory<typeof CalendarIcon> = (args) => (
  <CalendarIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 10,
  height: 7,
}
