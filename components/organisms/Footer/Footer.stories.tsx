import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Default = Template.bind({})

Default.args = {
  copyrightText: '© Egis - All rights reserved',
  primaryNavigationLinks: [
    {
      name: 'Get in touch',
      url: '/home-page/locations/europe/ukraine/kyiv/',
    },
    {
      name: 'Press & media',
      url: '/home-page/press-media/',
    },
  ],

  secondaryFooterNavigation: [
    {
      name: 'Privacy policy',
      url: '/home-page/privacy-policy/',
    },
    {
      name: 'Terms and Conditions',
      url: '/home-page/terms-and-conditions/',
    },
  ],
  socialFollow: [
    {
      socialPlatform: 'Linkedin',
      uRL: 'https://www.linkedin.com/',
    },
    {
      socialPlatform: 'Twitter',
      uRL: 'https://www.twitter.com/',
    },
    {
      socialPlatform: 'Facebook',
      uRL: 'https://www.facebook.com/',
    },
  ],
  subscribeLink: {
    name: 'Subscribe',
    url: '/home-page/newsletter-subscription/',
  },
  subscribeText: 'Stay updated with our newsletter',
}
