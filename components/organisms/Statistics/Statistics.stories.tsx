import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Statistics from './Statistics'
import { mockData } from './Statistics.mockData'

export default {
  title: 'Organisms/Statistics',
  component: Statistics,
} as ComponentMeta<typeof Statistics>

const Template: ComponentStory<typeof Statistics> = (args) => (
  <Statistics {...args} />
)

export const Primary = Template.bind({})
Primary.args = mockData
