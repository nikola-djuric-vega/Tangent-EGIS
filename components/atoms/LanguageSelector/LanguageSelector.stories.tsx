import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import LanguageSelector from './LanguageSelector'

export default {
  title: 'Atoms/LanguageSelector',
  component: LanguageSelector,
} as ComponentMeta<typeof LanguageSelector>

const Template: ComponentStory<typeof LanguageSelector> = () => (
  <LanguageSelector />
)

export const Primary = Template.bind({})
