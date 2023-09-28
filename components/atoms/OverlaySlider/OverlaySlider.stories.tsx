import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import OverlaySlider from './OverlaySlider'

export default {
  title: 'Atoms/OverlaySlider',

  component: OverlaySlider,
} as ComponentMeta<typeof OverlaySlider>

const Template: ComponentStory<typeof OverlaySlider> = (args) => (
  <OverlaySlider {...args} />
)

function MockComponent() {
  return <div className="bg-teal-blue">render me</div>
}

export const Default = Template.bind({})
Default.args = {
  isSliderOpen: true,
  children: MockComponent,
}
