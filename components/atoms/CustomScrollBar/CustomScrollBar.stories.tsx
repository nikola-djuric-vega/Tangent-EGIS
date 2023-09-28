import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CustomScrollBar from './CustomScrollBar'

export default {
  title: 'Atoms/CustomScrollBar',
  component: CustomScrollBar,
} as ComponentMeta<typeof CustomScrollBar>

const Template: ComponentStory<typeof CustomScrollBar> = (args) => (
  <CustomScrollBar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  scrollPos: 50,
}
