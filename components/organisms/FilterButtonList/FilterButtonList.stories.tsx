import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import FilterButtonList from './FilterButtonList'
import { mockData } from '../../molecules/CountryButtonList/CountryButtonList.mockData'

export default {
  title: 'Organisms/ButtonList',
  component: FilterButtonList,
} as ComponentMeta<typeof FilterButtonList>

const Template: ComponentStory<typeof FilterButtonList> = (args) => (
  <FilterButtonList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  countries: mockData,
}
