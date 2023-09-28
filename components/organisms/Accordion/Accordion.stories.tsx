import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Accordion from './Accordion'
import { awardsMockData, peopleMockData } from './Accordion.mockData'

export default {
  title: 'Organisms/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} />
)

export const Awards = Template.bind({})
Awards.args = awardsMockData

export const People = Template.bind({})
People.args = peopleMockData
