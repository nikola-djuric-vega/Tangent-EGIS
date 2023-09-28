import { ComponentMeta, ComponentStory } from '@storybook/react'

import GlobalFootprint from './GlobalFootprint'
import React from 'react'

export default {
  title: 'Molecules/GlobalFootprint',
  component: GlobalFootprint,
} as ComponentMeta<typeof GlobalFootprint>

const Template: ComponentStory<typeof GlobalFootprint> = (args) => (
  <section className="bg-midnight-blue">
    <GlobalFootprint {...args} />
  </section>
)

export const Primary = Template.bind({})

Primary.args = {
  linkTo: 'index.html',
  image: {
    featured_url: 'images/subsectorbanner.png',
  },
  title: '5000+ Projects completed',
  description:
    'Present in 5 continents, we have a global view with a local touch.',
}
