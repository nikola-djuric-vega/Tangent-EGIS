import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { mockData } from './AccordionItem.mockData'

import AccordionItem from '../AccordionItem/AccordionItem'

export default {
  title: 'Molecules/AccordionItem',
  component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>

const Template: ComponentStory<typeof AccordionItem> = (args) => (
  <AccordionItem {...args} />
)

export const Primary = Template.bind({})
Primary.args = mockData
