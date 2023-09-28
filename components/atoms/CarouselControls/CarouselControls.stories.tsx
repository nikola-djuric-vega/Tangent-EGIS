import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import CarouselControls from './CarouselControls'

export default {
  title: 'Atoms/CarouselControls',
  component: CarouselControls,
} as ComponentMeta<typeof CarouselControls>

const onBackClick = () => {
  console.log('back')
}
const onForwardClick = () => {
  console.log('forward')
}

const Template: ComponentStory<typeof CarouselControls> = (args) => (
  <CarouselControls {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  onBackClick: () => onBackClick(),
  onForwardClick: () => onForwardClick(),
  disableLeft: false,
  disableRight: false,
}
