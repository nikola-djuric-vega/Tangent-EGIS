import { ComponentMeta, ComponentStory } from '@storybook/react'

import ArticleHeader from './ArticleHeader'
import React from 'react'

export default {
  title: 'Organisms/Headers/ArticleHeader',
  component: ArticleHeader,
} as ComponentMeta<typeof ArticleHeader>

const TemplateWithoutTitleAndTag: ComponentStory<typeof ArticleHeader> = (
  args
) => <ArticleHeader {...args} />

const TemplateWithTitleAndTag: ComponentStory<typeof ArticleHeader> = (
  args
) => <ArticleHeader {...args} />

export const WithoutTag = TemplateWithoutTitleAndTag.bind({})
WithoutTag.args = {
  breadcrumbs: [
    {
      url: 'index.html',
      text: 'INSIGHTS ',
    },
    {
      url: 'index.html',
      text: 'CITY LIFE',
    },
  ],
  title: 'The A63 motorway, global pioneer for autonomous driving',
  date: '2021-07-05T00:00:00Z',
  time: '4',
}

export const WithTag = TemplateWithTitleAndTag.bind({})
WithTag.args = {
  breadcrumbs: [
    {
      url: 'index.html',
      text: 'EVENTS ',
    },
    {
      url: 'index.html',
      text: 'WEBINAR RECORDINGS',
    },
    {
      url: '',
      text: 'HOW VIRTUAL REALITY SECURES THE DANGEROUS TRAINING OF THE PATROLLERS',
    },
  ],
  title: 'How Virtual Reality secures the dangerous training of the patrollers',
  date: '2021-07-05T00:00:00Z',
  time: '45',
  tag: 'BUILDINGS',
}
