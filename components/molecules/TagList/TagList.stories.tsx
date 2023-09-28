import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TagList from './TagList'

export default {
  title: 'Molecules/TagList',
  component: TagList,
} as ComponentMeta<typeof TagList>

const Template: ComponentStory<typeof TagList> = (args) => <TagList {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'cta',
  title: 'Insight tags.',
  tags: [
    { name: 'Lorem ipsum' },
    { name: 'dolor sit amet' },
    { name: 'consectetur adipiscing elit' },
    { name: 'Suspendisse' },
    { name: 'consequat' },
    { name: 'posuere' },
    { name: 'euismod' },
    { name: 'ante' },
  ],
}
