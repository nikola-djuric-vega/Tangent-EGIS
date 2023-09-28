import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PaginationNavigation from './PaginationNavigation'

export default {
  title: 'Molecules/Pagination',
  component: PaginationNavigation,
} as ComponentMeta<typeof PaginationNavigation>

const Template: ComponentStory<typeof PaginationNavigation> = (args) => (
  <PaginationNavigation {...args} />
)

export const Default = Template.bind({})
Default.args = {
  pageCount: 10,
}
