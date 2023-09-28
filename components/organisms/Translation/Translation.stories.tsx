import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Translation from './Translation'
import data from './Translation.mockData'

export default {
  title: 'Organisms/Translation',
  component: Translation,
} as ComponentMeta<typeof Translation>

const Template: ComponentStory<typeof Translation> = (args) => (
  <Translation {...args} />
)

export const Default = Template.bind({})
Default.args = {
  data: data,
}
