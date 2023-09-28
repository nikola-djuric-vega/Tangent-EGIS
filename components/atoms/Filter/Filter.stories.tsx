import React from 'react'
import { Meta, Story } from '@storybook/react'
import Filter from './Filter'
import { Locations } from './Filter.mockData'

export default {
  title: 'Atoms/Filter',
  component: Filter,
} as Meta

const Template: Story<any> = (args) => <Filter {...args} />

export const Primary = Template.bind({})
Primary.args = Locations
