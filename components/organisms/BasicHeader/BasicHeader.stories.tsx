import { ComponentMeta, ComponentStory } from '@storybook/react'

import BasicHeader from './BasicHeader'
import React from 'react'

export default {
  title: 'Organisms/Headers/BasicHeader',
  component: BasicHeader,
} as ComponentMeta<typeof BasicHeader>

const Template: ComponentStory<typeof BasicHeader> = (args) => (
  <BasicHeader {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  breadcrumbs: [
    {
      url: '',
      text: 'EUROPE',
    },
  ],
  title: 'Europe',
  level: 3,
}
