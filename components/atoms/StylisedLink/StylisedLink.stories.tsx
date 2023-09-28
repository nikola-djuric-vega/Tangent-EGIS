import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import StylisedLink from './StylisedLink'
import ArrowIcon from '../icons/Arrow/ArrowIcon'

export default {
  title: 'Atoms/StylisedLink',
  component: StylisedLink,
} as ComponentMeta<typeof StylisedLink>

const Template: ComponentStory<typeof StylisedLink> = (args) => (
  <StylisedLink {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  linkText: 'Call to action label',
  linkTo: 'http://google.com',
  backgroundColour: 'bg-super-lime',
  hoverColour: 'bg-midnight-blue',
  textColour: 'text-midnight-blue',
  textHoverColour: 'text-super-lime',
  icon: <ArrowIcon rightArrow width={17} height={20} />,
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'secondary',
  linkText: 'Call to action label',
  linkTo: 'http://google.com',
  textColour: 'text-midnight-blue',
  textHoverColour: 'text-white',
  onlyBorder: true,
  icon: <ArrowIcon rightArrow width={17} height={20} />,
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  type: 'tertiary',
  linkText: 'Call to action label',
  linkTo: 'http://google.com',
}

export const TertiarySmallText = Template.bind({})
TertiarySmallText.args = {
  type: 'tertiary',
  linkText: 'Call to action label',
  smallText: true,
  linkTo: 'http://google.com',
}
