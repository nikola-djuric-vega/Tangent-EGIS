import React from 'react'
import { Story, Meta } from '@storybook/react'

import SearchInput from './SearchInput'

export default {
  title: 'Atoms/SearchInput',
  component: SearchInput,
} as Meta<typeof SearchInput>

const Template: Story<typeof SearchInput> = () => {
  return (
    <div className="h-screen bg-midnight-blue">
      <SearchInput />
    </div>
  )
}

export const Search = Template.bind({})
