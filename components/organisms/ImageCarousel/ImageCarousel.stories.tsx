import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ImageCarousel from './ImageCarousel'
import data from './ImageCarousel.mockData'

export default {
  title: 'Organisms/Carousel/ImageCarousel',
  component: ImageCarousel,
} as ComponentMeta<typeof ImageCarousel>

const Template: ComponentStory<typeof ImageCarousel> = (args) => (
  <ImageCarousel {...args} />
)

export const Primary = Template.bind({})
Primary.args = data
