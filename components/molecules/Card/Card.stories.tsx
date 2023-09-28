import { ComponentMeta, ComponentStory } from '@storybook/react'

import Card from './Card'
import React from 'react'
import TagLine from '../../atoms/TagLine/TagLine'

export default {
  title: 'Molecules/Card',
  component: Card,
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  linkTo: 'index.html',
  image: {
    featured_url: 'images/subsectorbanner.png',
  },
  tagline: <TagLine time={5} additionalInfo={'NEWS'} removeMargin />,
  title: 'Green Riyadh',
  subTitle: 'Riyadh, Saudi Arabia',
  description:
    'Since 2018, Egis have been regenerating the 113-hectare district in Toulouse’s suburb through the development of public spaces, 6,700 housing units, local shops and public facilities.',
}
