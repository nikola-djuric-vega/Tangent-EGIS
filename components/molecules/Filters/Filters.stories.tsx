import React from 'react'
import { Meta, Story } from '@storybook/react'
import Filters from './Filters'
import { one, two } from './Filters.mockData'

export default {
  title: 'Molecules/Filters',
  component: Filters,
} as Meta

const Template: Story<any> = (args) => (
  <div className="h-screen flex flex-col items-center justify-center">
    <Filters {...args} />
  </div>
)

export const One = Template.bind({})
One.args = one

export const Multiple = Template.bind({})
Multiple.args = two
