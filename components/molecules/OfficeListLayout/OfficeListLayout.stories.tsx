import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import OfficeListLayout from './OfficeListLayout'
import { officesData } from './OfficeListLayout.mockData'

export default {
  title: 'Molecules/OfficeListLayout',
  component: OfficeListLayout,
} as ComponentMeta<typeof OfficeListLayout>

const Template: ComponentStory<typeof OfficeListLayout> = (args) => (
  <OfficeListLayout {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Offices.',
  officesData: officesData,
}
