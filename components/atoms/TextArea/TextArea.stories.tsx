import React from 'react'
import { Story, Meta } from '@storybook/react'

import TextArea, { TextAreaProps } from './TextArea'

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
} as Meta

const Template: Story<TextAreaProps> = (args) => (
  <div className="m-10">
    <TextArea {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  isError: false,
  label: 'Message',
}
