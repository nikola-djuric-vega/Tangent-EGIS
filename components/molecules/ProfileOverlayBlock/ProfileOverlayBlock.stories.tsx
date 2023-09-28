import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProfileOverlayBlock from './ProfileOverlayBlock'
import { useState } from 'react'

export default {
  title: 'Molecules/ProfileOverlayBlock',
  component: ProfileOverlayBlock,
} as ComponentMeta<typeof ProfileOverlayBlock>

const Template: ComponentStory<typeof ProfileOverlayBlock> = (args) => {
  const [open, setOpen] = useState(false)
  return <ProfileOverlayBlock open={open} setOpen={setOpen} {...args} />
}

export const Airport = Template.bind({})
Airport.args = {
  image: 'images/airort-list-example.png',
  title: 'Ostend-Bruges International Airport',
  subtitle: 'Belgium',
  content:
    '<p class="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in hac. Quis lectus nulla at volutpat diam ut venenatis tellus in. Ante metus dictum at tempor commodo ullamcorper a lacus. Aliquam sem et tortor consequat id porta.</p>',
}

export const PeopleList = Template.bind({})
PeopleList.args = {
  image: 'images/people-list-example.png',
  title: 'Laurent Germain',
  subtitle: 'Chief Executive Officer',
  content:
    '<p class="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis cursus in hac. Quis lectus nulla at volutpat diam ut venenatis tellus in. Ante metus dictum at tempor commodo ullamcorper a lacus. Aliquam sem et tortor consequat id porta.</p>',
  quoteItem: [{ text: 'test', author: 'test', role: 'test' }],
}
