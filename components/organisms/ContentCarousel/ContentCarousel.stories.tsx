import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ContentCarousel from './ContentCarousel'
import data from './ContentCarousel.mockData'

export default {
  title: 'Organisms/Carousel/ContentCarousel',
  component: ContentCarousel,
} as ComponentMeta<typeof ContentCarousel>

const Template: ComponentStory<typeof ContentCarousel> = (args) => (
  <ContentCarousel {...args} />
)

export const Primary = Template.bind({})
Primary.args = data
