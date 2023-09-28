import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import DownloadIcon from './DownloadIcon'
import { theme } from '../../../../tailwind.config'

export default {
  title: 'Atoms/Icons/DownloadIcon',
  component: DownloadIcon,
} as ComponentMeta<typeof DownloadIcon>

const Template: ComponentStory<typeof DownloadIcon> = (args) => (
  <DownloadIcon {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  width: 21,
  height: 21,
  colour: theme.colors['midnight-blue'],
}
