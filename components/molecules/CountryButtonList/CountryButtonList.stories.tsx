import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CountryButtonList from './CountryButtonList'
import { mockData } from './CountryButtonList.mockData'

export default {
  title: 'Molecules/CountryButtonList',
  component: CountryButtonList,
} as ComponentMeta<typeof CountryButtonList>

const Template: ComponentStory<typeof CountryButtonList> = (args) => (
  <CountryButtonList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  countries: mockData,
}
