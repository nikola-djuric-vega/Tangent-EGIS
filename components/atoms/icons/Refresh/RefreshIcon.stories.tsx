import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import RefreshIcon from './RefreshIcon'

export default {
  title: 'Atoms/Icons/RefreshIcon',
  component: RefreshIcon,
} as ComponentMeta<typeof RefreshIcon>

const Template: ComponentStory<typeof RefreshIcon> = (args) => (
  <RefreshIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 28,
  height: 28,
}
