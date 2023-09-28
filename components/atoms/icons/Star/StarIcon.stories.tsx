import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import StarIcon from './StarIcon'

export default {
  title: 'Atoms/Icons/StarIcon',
  component: StarIcon,
} as ComponentMeta<typeof starIcon>

const Template: ComponentStory<typeof StarIcon> = (args) => (
  <StarIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 25,
  height: 25,
}
