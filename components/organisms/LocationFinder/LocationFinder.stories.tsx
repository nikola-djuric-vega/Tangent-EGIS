import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LocationFinder from './LocationFinder'
import {
  continentsMockData,
  countriesMockData,
  regionsMockData,
  testMockData,
} from './LocationFinder.mockData'

export default {
  title: 'Organisms/LocationFinder',
  component: LocationFinder,
} as ComponentMeta<typeof LocationFinder>

const Template: ComponentStory<typeof LocationFinder> = (args) => (
  <LocationFinder {...args} />
)

export const Continent = Template.bind({})
Continent.args = continentsMockData

export const Country = Template.bind({})
Country.args = countriesMockData

export const Region = Template.bind({})
Region.args = regionsMockData

export const Test = Template.bind({})
Test.args = testMockData
