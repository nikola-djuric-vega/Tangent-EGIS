import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react'

import RadioButton from './RadioButton'

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
} as Meta

const Template: Story = (args) => {
  const [option, setOption] = useState('')
  return (
    <div className="flex flex-col space-y-5 m-5">
      <RadioButton {...args[0]} setOption={setOption}></RadioButton>
      <RadioButton {...args[1]} setOption={setOption}></RadioButton>
    </div>
  )
}

export const ButtonSelect = Template.bind({})
ButtonSelect.args = [
  { hasError: false, value: 'Yes', id: 'test1', name: 'Option 1' },
  { hasError: false, value: 'No', id: 'test2', name: 'Option 2' },
]
