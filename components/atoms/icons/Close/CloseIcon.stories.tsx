import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CloseIcon from './CloseIcon'
import { theme } from '../../../../tailwind.config'

export default {
  title: 'Atoms/Icons/CloseIcon',
  component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>

const Template: ComponentStory<typeof CloseIcon> = (args) => (
  <CloseIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 21,
  height: 21,
  colour: theme.colors['midnight-blue'],
}
