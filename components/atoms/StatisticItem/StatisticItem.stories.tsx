import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import StatisticItem from './StatisticItem'

export default {
  title: 'Atoms/StatisticItem',
  component: StatisticItem,
} as ComponentMeta<typeof StatisticItem>

const Template: ComponentStory<typeof StatisticItem> = (args) => (
  <StatisticItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: '8500',
  subtitle: 'Lorem ipsum dolor sit',
  introText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
}
