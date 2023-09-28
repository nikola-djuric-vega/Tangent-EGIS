import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import QuoteCarousel from './QuoteCarousel'
import data from './QuoteCarousel.mockData'

export default {
  title: 'Organisms/Carousel/QuoteCarousel',
  component: QuoteCarousel,
} as ComponentMeta<typeof QuoteCarousel>

const Template: ComponentStory<typeof QuoteCarousel> = (args) => (
  <QuoteCarousel {...args} />
)

export const Multiple = Template.bind({})
Multiple.args = data.carousels[0]

export const Single = Template.bind({})
Single.args = data.carousels[1]
