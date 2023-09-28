import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import CookieBanner from './CookieBanner'

export default {
  title: 'Organisms/CookieBanner',
  component: CookieBanner,
} as ComponentMeta<typeof CookieBanner>

const Template: ComponentStory<typeof CookieBanner> = (args) => (
  <CookieBanner
    handleAgree={() => console.log('user has agreed')}
    handleDeny={() => console.log('user has denied')}
    {...args}
  />
)

const cookieText =
  '<h6>We use cookies on our website</h6>\n<p class="body3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="/home-page/privacy-policy/" title="Cookie policy">Link to cookies</a>, quis nostrud exercitation.</p>\n<p class="body3">By choosing “Yes, I agree”, you consent to our use of cookies.</p>'

export const Default = Template.bind({})
Default.args = {
  cookieText: cookieText,
  agreeButtonText: 'Yes, I agree',
  denyButtonText: 'Deny cookies',
}
