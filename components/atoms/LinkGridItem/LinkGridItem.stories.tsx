import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LinkGridItem from './LinkGridItem'
import TagLine from '../../atoms/TagLine/TagLine'

export default {
  title: 'Atoms/LinkGridItem',
  component: LinkGridItem,
} as ComponentMeta<typeof LinkGridItem>

const Template: ComponentStory<typeof LinkGridItem> = (args) => (
  <div className="grid grid-cols-10">
    <div className="col-span-3">
      <LinkGridItem {...args} />
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  linkTo: 'index.html',
  image: { url: 'test-image.png' },
  title: 'Larnaca International Airport',
  subTitle: 'Cyprus',
  buttonText: 'Test',
}
