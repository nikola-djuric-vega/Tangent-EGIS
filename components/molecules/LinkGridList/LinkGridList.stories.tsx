import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LinkGridList from './LinkGridList'
import { airportArray, peopleArray } from './LinkGridList.mockData'

export default {
  title: 'Molecules/LinkGridList',
  component: LinkGridList,
} as ComponentMeta<typeof LinkGridList>

const Template: ComponentStory<typeof LinkGridList> = (args) => (
  <LinkGridList {...args} />
)

export const AirportList = Template.bind({})
AirportList.args = {
  stylisedLink: 'Contact our Building team',
  stylisedLinkUrl: 'profile',
  buttonText: 'Read more',
  title: 'Our list of airports.',
  linkGridArray: airportArray,
}

export const PeopleList = Template.bind({})
PeopleList.args = {
  buttonText: 'Read bio',
  title: 'Our sector leaders',
  linkGridArray: peopleArray,
}
