import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PhoneIcon from './PhoneIcon'

export default {
  title: 'Atoms/Icons/PhoneIcon',
  component: PhoneIcon,
} as ComponentMeta<typeof PhoneIcon>

const Template: ComponentStory<typeof PhoneIcon> = (args) => (
  <PhoneIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 25,
  height: 25,
}
