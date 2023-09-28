import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TextCarouselItem from './TextCarouselItem'

export default {
  title: 'Molecules/TextCarouselItem',
  component: TextCarouselItem,
} as ComponentMeta<typeof TextCarouselItem>

const Template: ComponentStory<typeof TextCarouselItem> = (args) => (
  <TextCarouselItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  text:
    'Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Senectus et netus et malesuada fames ac turpis egestas. Aliquam ultrices sagittis orci a scelerisque purus semper eget.”',
  author: 'John Smith',
  role: 'Lead Engineer',
}
