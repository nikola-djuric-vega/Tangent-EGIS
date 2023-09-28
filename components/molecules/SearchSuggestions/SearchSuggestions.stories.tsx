import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SearchSuggestions from './SearchSuggestions'

export default {
  title: 'Molecules/SearchSuggestions',
  component: SearchSuggestions,
} as ComponentMeta<typeof SearchSuggestions>

const Template: ComponentStory<typeof SearchSuggestions> = (args) => (
  <div className="h-screen bg-midnight-blue p-5">
    <SearchSuggestions {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  suggestionLabel: 'Popular',
  searchSuggestions: ['Aviation Sector', 'Aviation Projects', 'Aviation'],
}
