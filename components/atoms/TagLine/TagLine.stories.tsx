import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TagLine from './TagLine'

export default {
  title: 'Atoms/TagLine',
  component: TagLine,
} as ComponentMeta<typeof TagLine>

const Template: ComponentStory<typeof TagLine> = (args) => <TagLine {...args} />

export const Primary = Template.bind({})
Primary.args = {
  additionalInfo: 'NEWS',
  time: 5,
}
