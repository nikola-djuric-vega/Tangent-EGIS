import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import GoogleMap from './GoogleMap'

export default {
  title: 'Molecules/GoogleMap',
  component: GoogleMap,
} as ComponentMeta<typeof GoogleMap>

const Template: ComponentStory<typeof GoogleMap> = (args) => (
  <div className="w-screen h-screen">
    <GoogleMap {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  lat: 51.55456829996463,
  lng: -0.10723637038030188,
}
