import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ButtonList from './ButtonList'
import { mockData } from '../../molecules/CountryButtonList/CountryButtonList.mockData'

export default {
  title: 'Organisms/ButtonList',
  component: ButtonList,
} as ComponentMeta<typeof ButtonList>

const Template: ComponentStory<typeof ButtonList> = (args) => (
  <ButtonList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  countries: mockData,
}
