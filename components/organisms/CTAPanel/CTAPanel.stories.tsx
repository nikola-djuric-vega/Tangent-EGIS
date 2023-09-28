import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CTAPanel from './CTAPanel'
import clsx from 'clsx'

export default {
  title: 'Organisms/CTAPanel',
  component: CTAPanel,
} as ComponentMeta<typeof CTAPanel>

const Template: ComponentStory<typeof CTAPanel> = (args) => (
  <section
    className={clsx({
      'md:left-steel-gray-lightest': args.bgColor === 'lightBlue',
      'md:left-super-lime': args.bgColor === 'lightGreen',
      'md:left-gray-lightest': args.bgColor === 'grey',
    })}
  >
    <div className="container">
      <CTAPanel {...args} />
    </div>
  </section>
)

export const Primary = Template.bind({})
Primary.args = {
  title: 'Join us.',
  description:
    'Support the transformation happening in cities and communities by contributing to complex and large-scale infrastructure projects globally.',
  bgColor: 'lightBlue',
  image: { url: 'images/image-carousel-22.png' },
  linkText: 'View roles',
  linkTo: 'http://google.com',
}

export const Grey = Template.bind({})
Grey.args = {
  title: 'Join us.',
  description:
    'Support the transformation happening in cities and communities by contributing to complex and large-scale infrastructure projects globally.',
  bgColor: 'grey',
  image: { url: 'images/image-carousel-22.png' },
  linkText: 'View roles',
  linkTo: 'http://google.com',
}

export const LighGreen = Template.bind({})
LighGreen.args = {
  title: 'Join us.',
  description:
    'Support the transformation happening in cities and communities by contributing to complex and large-scale infrastructure projects globally.',
  bgColor: 'lightGreen',
  image: { url: 'images/image-carousel-22.png' },
  linkText: 'View roles',
  linkTo: 'http://google.com',
}

export const LightBlue = Template.bind({})
LightBlue.args = {
  title: 'Join us.',
  description:
    'Support the transformation happening in cities and communities by contributing to complex and large-scale infrastructure projects globally.',
  bgColor: 'lightBlue',
  image: { url: 'images/image-carousel-22.png' },
  linkText: 'View roles',
  linkTo: 'http://google.com',
}

export const InternalLink = Template.bind({})
InternalLink.args = {
  linkType: 'internal',
  title: 'Join us.',
  description:
    'Support the transformation happening in cities and communities by contributing to complex and large-scale infrastructure projects globally.',
  bgColor: 'lightBlue',
  image: { url: 'images/image-carousel-22.png' },
  linkText: 'View roles',
  linkTo: 'http://google.com',
}

export const ExternalLink = Template.bind({})
ExternalLink.args = {
  linkType: 'external',
  title: 'Join us.',
  description:
    'Support the transformation happening in cities and communities by contributing to complex and large-scale infrastructure projects globally.',
  bgColor: 'lightBlue',
  image: { url: 'images/image-carousel-22.png' },
  linkText: 'View roles',
  linkTo: 'http://google.com',
}
