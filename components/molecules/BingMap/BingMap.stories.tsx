import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import BingMap from './BingMap'

export default {
  title: 'Molecules/BingMap',
  component: BingMap,
} as ComponentMeta<typeof BingMap>

const Template: ComponentStory<typeof BingMap> = (args) => <BingMap {...args} />

export const Default = Template.bind({})
Default.args = {
  lat: 51.55456829996463,
  lng: -0.10723637038030188,
}
