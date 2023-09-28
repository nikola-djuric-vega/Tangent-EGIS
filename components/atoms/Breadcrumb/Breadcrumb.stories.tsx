import { ComponentMeta, ComponentStory } from '@storybook/react'

import Breadcrumb from './Breadcrumb'
import React from 'react'

export default {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
)

export const OneArgument = Template.bind({})
OneArgument.args = {
  breadcrumbs: [
    {
      url: 'index.html',
      text: 'EVENTS ',
    },
  ],
}

export const TwoArguments = Template.bind({})
TwoArguments.args = {
  breadcrumbs: [
    {
      url: 'index.html',
      text: 'EVENTS ',
    },
    {
      url: 'index.html',
      text: 'WEBINAR RECORDINGS',
    },
  ],
}

export const ThreeArguments = Template.bind({})
ThreeArguments.args = {
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
}
