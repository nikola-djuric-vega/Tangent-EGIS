import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import FilterButtonList from './FilterButtonList'
import { mockData } from './FilterButtonList.mockData'

export default {
  title: 'Molecules/FilterButtonList',
  component: FilterButtonList,
} as ComponentMeta<typeof FilterButtonList>

const Template: ComponentStory<typeof FilterButtonList> = (args) => (
  <FilterButtonList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  buttons: mockData,
}
