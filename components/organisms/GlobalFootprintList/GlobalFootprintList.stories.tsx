import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import GlobalFootprintList from '../../organisms/GlobalFootprintList/GlobalFootprintList'

import { globalFootprintArray } from '../../molecules/GlobalFootprint/GlobalFootprint.mockData'

export default {
  title: 'Organisms/GlobalFootprintList',
  component: GlobalFootprintList,
} as ComponentMeta<typeof GlobalFootprintList>

const Template: ComponentStory<typeof GlobalFootprintList> = (args) => {
  return (
    <section className="bg-midnight-blue">
      <GlobalFootprintList {...args} />
    </section>
  )
}

export const Footprint = Template.bind({})

Footprint.args = {
  footprintHeading: 'Global Footprint',
  footprintData: globalFootprintArray,
}
