import { ComponentMeta, ComponentStory } from '@storybook/react'
import { two } from '../../molecules/Filters/Filters.mockData'
import FiltersHeader from './FiltersHeader'
import React from 'react'

export default {
  title: 'Organisms/Headers/FiltersHeader',
  component: FiltersHeader,
} as ComponentMeta<typeof FiltersHeader>

const Template: ComponentStory<typeof FiltersHeader> = (args) => (
  <FiltersHeader {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  breadcrumbs: [
    {
      url: '',
      text: 'EUROPE',
    },
  ],
  title: 'Europe',
  level: 3,
  filters: two,
}
