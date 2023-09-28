import { ComponentMeta, ComponentStory } from '@storybook/react'

import SimpleHeader from './SimpleHeader'
import React from 'react'

export default {
  title: 'Organisms/Headers/SimpleHeader',
  component: SimpleHeader,
} as ComponentMeta<typeof SimpleHeader>

const Template: ComponentStory<typeof SimpleHeader> = (args) => (
  <SimpleHeader {...args} />
)

export const WithDescription = Template.bind({})
WithDescription.args = {
  breadcrumbs: [
    {
      url: '',
      text: 'EUROPE',
    },
  ],
  title: 'Europe',
  level: 3,
  description:
    'Traditionally based in Europe, Egis has many local subsidiaries working together to offer the best services across the European continent.',
}

export const WithoutDescription = Template.bind({})
WithoutDescription.args = {
  breadcrumbs: [
    {
      url: '',
      text: 'BUILDINGS',
    },
  ],
  title: 'Buildings',
  level: 3,
  description: '',
}
