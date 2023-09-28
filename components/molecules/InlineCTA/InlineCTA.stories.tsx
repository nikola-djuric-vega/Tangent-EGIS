import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import InlineCTA from './InlineCTA'

export default {
  title: 'Molecules/InlineCTA',
  component: InlineCTA,
} as ComponentMeta<typeof InlineCTA>

const Template: ComponentStory<typeof InlineCTA> = (args) => (
  <InlineCTA {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Subscribe',
  text: 'Support the transformation happening in cities and communities by contributing to complex and large-scale infrastructure projects globally.',
  linkText: 'Sign me up',
  linkTo: 'https://www.tangent.co.uk/',
}
