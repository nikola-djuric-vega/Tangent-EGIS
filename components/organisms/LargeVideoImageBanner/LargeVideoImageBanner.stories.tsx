import { ComponentMeta, ComponentStory } from '@storybook/react'

import LargeVideoImageBanner from './LargeVideoImageBanner'
import React from 'react'

export default {
  title: 'Organisms/Banners/LargeVideoImageBanner',
  component: LargeVideoImageBanner,
} as ComponentMeta<typeof LargeVideoImageBanner>

const Template: ComponentStory<typeof LargeVideoImageBanner> = (args) => (
  <section className="border-b border-gray-light">
    <div className="container">
      <LargeVideoImageBanner {...args} />
    </div>
  </section>
)

export const WithVideo = Template.bind({})
WithVideo.args = {
  imageAltText: 'image text',
  image: 'images/landscapetestimage.jpg',
  shareText: 'Share the project',
  socialLinks: [
    { label: 'facebook', to: 'share facebook link' },
    { label: 'twitter', to: 'share twitter link' },
    { label: 'linkedin', to: 'share linkedin link' },
  ],
  videoUrl: 'https://www.youtube.com/watch?v=XA625ooKqSw',
}

export const WithoutVideo = Template.bind({})
WithoutVideo.args = {
  imageAltText: 'image text',
  image: 'images/landscapetestimage.jpg',
  shareText: 'Share the project',
  socialLinks: [
    { label: 'facebook', to: 'share facebook link' },
    { label: 'twitter', to: 'share twitter link' },
    { label: 'linkedin', to: 'share linkedin link' },
  ],
}
