import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { mockData } from './SearchResults.mockData'

import SearchResults from './SearchResults'

export default {
  title: 'Organisms/SearchResults',
  component: SearchResults,
} as ComponentMeta<typeof SearchResults>

const Template: ComponentStory<typeof SearchResults> = (args) => (
  <SearchResults {...args} />
)

export const Default = Template.bind({})
Default.args = mockData

export const HideFeatured = Template.bind({})
HideFeatured.args = { ...mockData, hideFeatured: true }
