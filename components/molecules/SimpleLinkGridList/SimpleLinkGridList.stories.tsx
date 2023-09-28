import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SimpleSimpleLinkGridList from './SimpleLinkGridList'
import { peopleArray } from './SimpleLinkGridList.mockData'

export default {
  title: 'Molecules/SimpleLinkGridList',
  component: SimpleSimpleLinkGridList,
} as ComponentMeta<typeof SimpleSimpleLinkGridList>

const Template: ComponentStory<typeof SimpleSimpleLinkGridList> = (args) => (
  <SimpleSimpleLinkGridList {...args} />
)

export const PeopleList = Template.bind({})
PeopleList.args = {
  buttonText: 'Read bio',
  linkGridArray: peopleArray,
}
