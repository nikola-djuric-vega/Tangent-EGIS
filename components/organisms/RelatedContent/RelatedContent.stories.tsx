import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import RelatedContent from './RelatedContent'
import data from './RelatedContent.mockData'

export default {
  title: 'Organisms/Carousel/RelatedContent',
  component: RelatedContent,
} as ComponentMeta<typeof RelatedContent>

const Template: ComponentStory<typeof RelatedContent> = (args) => (
  <RelatedContent {...args} />
)

export const Primary = Template.bind({})
Primary.args = data
