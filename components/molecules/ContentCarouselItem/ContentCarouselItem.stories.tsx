import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ContentCarouselItem from './ContentCarouselItem'

export default {
  title: 'Molecules/ContentCarouselItem',
  component: ContentCarouselItem,
} as ComponentMeta<typeof ContentCarouselItem>

const Template: ComponentStory<typeof ContentCarouselItem> = (args) => (
  <ContentCarouselItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  image: { url: 'test-image.png' },
  hideDetails: false,
  readLength: '6',
  title: 'Faubourg Malepère',
  description: `Since 2018, Egis have been regenerating the 113-hectare district
  in Toulouse’s suburb through the development of public spaces,
  6,700 housing units, local shops and public facilities.`,
  linkTo: 'content_page',
}
