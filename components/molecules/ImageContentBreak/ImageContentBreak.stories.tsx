import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ImageContentBreak from './ImageContentBreak'
import { data } from './ImageContentBreak.mockData'

export default {
  title: 'Molecules/ImageContentBreak',
  component: ImageContentBreak,
} as ComponentMeta<typeof ImageContentBreak>

const Template: ComponentStory<typeof ImageContentBreak> = (args) => (
  <section className="bg-steel-gray-lightest">
    <div className="container">
      <ImageContentBreak {...args} />
    </div>
  </section>
)

export const Primary = Template.bind({})
Primary.args = data
