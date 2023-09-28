import React from 'react'
import { Meta, Story } from '@storybook/react'
import Checkbox, { CheckboxProps } from './Checkbox'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
} as Meta

export const Template: Story = (args) => (
  <div className="flex flex-col h-screen w-screen justify-center items-center space-y-4">
    <Checkbox {...args[0]} />
    <Checkbox {...args[1]} />
  </div>
)

Template.args = [
  {
    text: 'Option 1',
    name: 'Is check',
    id: 'check',
    hasError: false,
  },
  {
    text: 'Option 2',
    name: 'Is check',
    id: 'check',
    hasError: false,
  },
]
