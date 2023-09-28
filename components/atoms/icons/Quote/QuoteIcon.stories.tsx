import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import QuoteIcon from './QuoteIcon'

export default {
  title: 'Atoms/Icons/QuoteIcon',
  component: QuoteIcon,
} as ComponentMeta<typeof QuoteIcon>

const Template: ComponentStory<typeof QuoteIcon> = (args) => (
  <QuoteIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 36,
  height: 27,
}
