import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import EgisLogo from './EgisLogo'
import { theme } from '../../../tailwind.config'

export default {
  title: 'Atoms/EgisLogo',
  component: EgisLogo,
} as ComponentMeta<typeof EgisLogo>

const Template: ComponentStory<typeof EgisLogo> = (args) => (
  <EgisLogo {...args} />
)

export const Light = Template.bind({})
Light.args = {
  width: 87,
  height: 36,
  markColor: theme.colors['egis-green'],
  textColor: theme.colors['white'],
}

export const Dark = Template.bind({})
Dark.args = {
  width: 87,
  height: 36,
  markColor: theme.colors['egis-green'],
  textColor: theme.colors['black'],
}

export const Grey = Template.bind({})
Grey.args = {
  width: 87,
  height: 36,
  markColor: theme.colors['steel-gray'].dark,
  textColor: theme.colors['steel-gray'].dark,
}

export const Black = Template.bind({})
Black.args = {
  width: 87,
  height: 36,
  markColor: theme.colors['black'],
  textColor: theme.colors['black'],
}
