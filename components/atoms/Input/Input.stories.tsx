import React from 'react'
import { Story, Meta } from '@storybook/react'

import Input from './Input'

export default {
  title: 'Atoms/Input',
  component: Input,
} as Meta<typeof Input>

const Template: Story<typeof Input> = (args) => (
  <div className="mt-10 ml-5">
    <Input {...args} />
  </div>
)

export const Text = Template.bind({})

Text.args = {
  isError: false,
  label: 'Text placeholder',
  type: 'text',
}

export const Password = Template.bind({})
Password.args = {
  isError: false,
  label: 'Password placeholder',
  type: 'password',
  errorMessage: 'Password incorrect',
}

export const Email = Template.bind({})

Email.args = {
  isError: false,
  label: 'email placeholder',
  type: 'email',
}
