import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TagItem from './TagItem'

export default {
  title: 'Atoms/TagItem',
  component: TagItem,
} as ComponentMeta<typeof TagItem>

const Template: ComponentStory<typeof TagItem> = (args) => <TagItem {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'cta',
  buttonText: 'tag button',
}
