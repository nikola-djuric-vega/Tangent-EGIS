import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import AccordionListView from './AccordionListView'

export default {
  title: 'Molecules/AccordionListView',
  component: AccordionListView,
} as ComponentMeta<typeof AccordionListView>

const Template: ComponentStory<typeof AccordionListView> = (args) => (
  <AccordionListView {...args} />
)

export const Default = Template.bind({})
Default.args = {
  list: [{ title: 'France' }, { title: 'United Kingdom' }],
}
