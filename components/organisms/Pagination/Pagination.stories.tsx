import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Pagination from './Pagination'
import { mockData } from './Pagination.mockData'

export default {
  title: 'Organisms/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
)

export const Default = Template.bind({})
Default.args = mockData
