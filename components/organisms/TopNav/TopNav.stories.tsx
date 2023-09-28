import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TopNav from './TopNav'
import data from './TopNav.mockData'

export default {
  title: 'Organisms/TopNav',
  component: TopNav,
} as ComponentMeta<typeof TopNav>

const Template: ComponentStory<typeof TopNav> = (args) => <TopNav {...args} />

export const Default = Template.bind({})
Default.args = {
  primaryLinks: data.primaryLinks,
  secondaryLinks: data.secondaryLinks,
  url_en: data.url_en,
  url_fr: data.url_fr,
  url_es: data.url_es,
  url_pt: data.url_pt,
}

export const Transparent = Template.bind({})
Transparent.args = {
  primaryLinks: data.primaryLinks,
  secondaryLinks: data.secondaryLinks,
  url_en: data.url_en,
  url_fr: data.url_fr,
  url_es: data.url_es,
  url_pt: data.url_pt,
  transparent: true,
}
