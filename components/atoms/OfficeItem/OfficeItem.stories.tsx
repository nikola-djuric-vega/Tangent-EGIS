import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import OfficeItem from './OfficeItem'

export default {
  title: 'Atoms/OfficeItem',
  component: OfficeItem,
} as ComponentMeta<typeof OfficeItem>

const Template: ComponentStory<typeof OfficeItem> = (args) => (
  <OfficeItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  office: {
    city: 'Bangalore',
    address: [
      '29 Antonovycha Street',
      'Lorem ipsum',
      '01033',
      'India',
      '07000 000 000',
    ],
    linkTo: 'get in touch bangalore',
  },
}
