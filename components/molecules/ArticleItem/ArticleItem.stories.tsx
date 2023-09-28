import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticleItem from './ArticleItem'
import Heading from '../../atoms/Heading/Heading'

export default {
  title: 'Molecules/ArticleItem',
  component: ArticleItem,
} as ComponentMeta<typeof ArticleItem>

const Template: ComponentStory<typeof ArticleItem> = (args) => (
  <ArticleItem {...args}>{args.children}</ArticleItem>
)

export const Primary = Template.bind({})
Primary.args = {
  linkText: 'View our commitments',
  linkTo: '/linkhere',
  bg: true,
  sideItem: <Heading level={6}>Our Approach</Heading>,
  children: (
    <div
      className="prose"
      dangerouslySetInnerHTML={{
        __html:
          '<p class="body2">At consectetur lorem donec massa. Fames ac turpis egestas sed tempus urna et pharetra. Nisl suscipit adipiscing bibendum est. Ultrices in iaculis nunc sed augue. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Massa enim nec dui nunc mattis. Morbi enim nunc faucibus a pellentesque sit.</p><p>At consectetur lorem donec massa. Fames ac turpis egestas sed tempus urna et pharetra. Nisl suscipit adipiscing bibendum est. Ultrices in iaculis nunc sed augue. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Massa enim nec dui nunc mattis. Morbi enim nunc faucibus a pellentesque sit</p><p>At consectetur lorem donec massa. Fames ac turpis egestas sed tempus urna et pharetra. Nisl suscipit adipiscing bibendum est. Ultrices in iaculis nunc sed augue. Lacus sed turpis tincidunt id aliquet risus feugiat in ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Amet consectetur adipiscing elit pellentesque habitant morbi. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Massa enim nec dui nunc mattis. Morbi enim nunc faucibus a pellentesque sit.</p>',
      }}
    ></div>
  ),
}
