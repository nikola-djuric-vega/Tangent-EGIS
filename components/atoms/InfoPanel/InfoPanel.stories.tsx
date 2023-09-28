import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InfoPanel from './InfoPanel'

export default {
  title: 'Atoms/InfoPanel',
  component: InfoPanel,
} as ComponentMeta<typeof InfoPanel>

const Template: ComponentStory<typeof InfoPanel> = (args) => (
  <InfoPanel title={args.title} hLevel={args.hLevel}>
    {args.children}
  </InfoPanel>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Advisory & delivery',
  children: (
    <div
      className="body3"
      dangerouslySetInnerHTML={{
        __html:
          'We deliver over 10,000 projects at any one time across sectors and of variable technical complexity.',
      }}></div>
  ),
}
