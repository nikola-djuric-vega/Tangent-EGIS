import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArrowIcon from './ArrowIcon'

import { theme } from '../../../../tailwind.config'

export default {
  title: 'Atoms/Icons/ArrowIcon',
  component: ArrowIcon,
} as ComponentMeta<typeof ArrowIcon>

const Template: ComponentStory<typeof ArrowIcon> = (args) => (
  <ArrowIcon {...args} />
)

export const GoBack = Template.bind({})
GoBack.args = {
  width: 128,
  height: 128,
  rightArrow: false,
  backgroundColor: 'super-lime',
}

export const CarouselLeft = Template.bind({})
CarouselLeft.args = {
  opacity: true,
  width: 46,
  height: 46,
  backgroundColor: 'teal-blue',
}

export const CarouselRight = Template.bind({})
CarouselRight.args = {
  width: 46,
  height: 46,
  rightArrow: true,
  backgroundColor: 'super-lime',
}

export const Arrow = Template.bind({})
Arrow.args = {
  width: 46,
  height: 46,
  rightArrow: true,
}

export const External = Template.bind({})
External.args = {
  width: 46,
  height: 46,
  angle: true,
}
