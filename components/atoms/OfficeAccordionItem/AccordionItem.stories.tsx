import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AccordionItem from './AccordionItem'
import ArrowIcon from '../icons/Arrow/ArrowIcon'

export default {
  title: 'Atoms/AccordionItem',
  component: AccordionItem,
} as ComponentMeta<typeof AccordionItem>

const Template: ComponentStory<typeof AccordionItem> = (args) => (
  <AccordionItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  text: 'Europe',
  icon: <ArrowIcon width={15} height={11} rightArrow />,
}
