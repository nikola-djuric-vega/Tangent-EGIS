import React from 'react'
import { Meta, Story } from '@storybook/react'
import Dropdown from './Dropdown'

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
  args: {
    placeholder: 'Dropdown',
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ],
    change: (value: object | null) => console.log(value),
  },
} as Meta

export const Default: Story<any> = (args) => (
  <div className="w-full">
    <Dropdown {...args} />
  </div>
)
