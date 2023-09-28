import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TranslationGlobe from './TranslationGlobe'

export default {
  title: 'Atoms/Icons/TranslationGlobe',
  component: TranslationGlobe,
} as ComponentMeta<typeof TranslationGlobe>

const Template: ComponentStory<typeof TranslationGlobe> = (args) => (
  <TranslationGlobe {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 16,
  height: 16,
}
