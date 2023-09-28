import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SimpleInfoItem from './SimpleInfoItem'

export default {
  title: 'Atoms/SimpleInfoItem',
  component: SimpleInfoItem,
} as ComponentMeta<typeof SimpleInfoItem>

const Template: ComponentStory<typeof SimpleInfoItem> = (args) => (
  <SimpleInfoItem title={args.title}>{args.children}</SimpleInfoItem>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Our approach',
  children: (
    <div className="col-span-5 py-4 sm:col-span-5 sm:py-9">
      <p className="font-serif text-2xl font-normal leading-8 sm:text-3xl">
        Egis creates and operates intelligent infrastructures and buildings that
        impacts people&apos;s lives globally. Our mission is to imagine, create
        and achieve a sustainable future.
      </p>
    </div>
  ),
}
