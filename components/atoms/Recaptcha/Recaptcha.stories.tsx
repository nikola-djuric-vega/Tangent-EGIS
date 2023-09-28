import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Recaptcha from './Recaptcha'

export default {
  title: 'Atoms/Recaptcha',
  component: Recaptcha,
} as ComponentMeta<typeof Recaptcha>

const Template: ComponentStory<typeof Recaptcha> = () => (
  <Recaptcha>
    <div className="flex h-screen justify-center items-center">
      Recaptcha v3 <span className="ml-4 font-bold">[no UI]</span>
    </div>
  </Recaptcha>
)

export const Default = Template.bind({})
