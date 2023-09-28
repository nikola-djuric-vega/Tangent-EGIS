import { ComponentMeta, ComponentStory } from '@storybook/react'

import ArticleTagline from './ArticleTagline'
import React from 'react'

export default {
  title: 'Atoms/ArticleTagline',
  component: ArticleTagline,
} as ComponentMeta<typeof ArticleTagline>

const Template: ComponentStory<typeof ArticleTagline> = (args) => (
  <ArticleTagline {...args} />
)

export const WithTag = Template.bind({})
WithTag.args = {
  date: '2021-03-29T00:00:00Z',
  time: '45',
  tag: 'Buildings',
}

export const WithoutTag = Template.bind({})
WithoutTag.args = {
  date: '2021-07-05T00:00:00Z',
  time: '4',
  tag: '',
}

export const isEvent = Template.bind({})
isEvent.args = {
  date: '2021-07-05T00:00:00Z',
  time: '4',
  tag: 'Buildings',
  isEvent: true,
}
