import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Navigation from './NavigationIcon'

export default {
  title: 'Atoms/Icons/NavigationIcon',
  component: Navigation,
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 19,
  height: 19,
}
