import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EventDetail from './EventDetail'

export default {
  title: 'Molecules/EventDetail',
  component: EventDetail,
} as ComponentMeta<typeof EventDetail>

const Template: ComponentStory<typeof EventDetail> = (args) => (
  <EventDetail {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  date: '2021-02-17T00:00:00Z',
  time: '9.00 - 11.00 GMT',
  registerLink: { url: '/', name: 'Register' },
}
