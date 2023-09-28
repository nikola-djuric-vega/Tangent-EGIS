import { ComponentMeta, ComponentStory } from '@storybook/react'

import AnimatedBanner from './AnimatedBanner'
import { mockData } from './AnimatedBanner.mockData'

export default {
  title: 'Organisms/Banners/AnimatedBanner',
  component: AnimatedBanner,
} as ComponentMeta<typeof AnimatedBanner>

const Template: ComponentStory<typeof AnimatedBanner> = (args) => (
  <AnimatedBanner {...args} />
)

export const Primary = Template.bind({})
Primary.args = mockData
