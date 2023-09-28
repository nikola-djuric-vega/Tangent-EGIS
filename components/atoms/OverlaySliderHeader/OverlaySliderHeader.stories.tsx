import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import OverlaySliderHeader from './OverlaySliderHeader'

export default {
  title: 'Atoms/OverlaySliderHeader',
  component: OverlaySliderHeader,
} as ComponentMeta<typeof OverlaySliderHeader>

const Template: ComponentStory<typeof OverlaySliderHeader> = (args) => (
  <OverlaySliderHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Overlay Title',
  subtitle: 'Overlay Subtitle',
  image: 'images/people-list-example.png',
}
