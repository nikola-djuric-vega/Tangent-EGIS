import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './Button'
import ArrowIcon from '../icons/Arrow/ArrowIcon'

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  buttonText: 'Call to action label',
  backgroundColour: 'bg-super-lime',
  hoverColour: 'bg-midnight-blue',
  textColour: 'text-midnight-blue',
  textHoverColour: 'text-super-lime',
  icon: <ArrowIcon rightArrow width={17} height={20} />,
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  buttonText: 'Call to action label',
  textColour: 'text-midnight-blue',
  textHoverColour: 'text-white',
  onlyBorder: true,
  icon: <ArrowIcon rightArrow width={17} height={20} />,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: 'tertiary',
  buttonText: 'Call to action label',
}

export const TertiarySmallText = Template.bind({})
TertiarySmallText.args = {
  type: 'tertiary',
  buttonText: 'Call to action label',
  smallText: true,
}
