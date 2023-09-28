import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import VideoBannerComponent from './VideoBackgroundBanner'

export default {
  title: 'Organisms/VideoBannerComponent',
  component: VideoBannerComponent,
} as ComponentMeta<typeof VideoBannerComponent>

const Template: ComponentStory<typeof VideoBannerComponent> = (args) => (
  <VideoBannerComponent {...args} />
)

export const Default = Template.bind({})
Default.args = {
  category: 'Sustainability.',
  title: 'Our commitment to a greener future.',
  introText:
    'We believe that every project should commit to improving the world we live in. That’s why we’ve issued a Sustainable Development Charter to pledge our commitment and contribution to a more sustainable economy.',
  video: 'http://techslides.com/demos/sample-videos/small.mp4',
  link: { name: 'Read more', url: '/home-page/about' },
  preloadedImage: 'https://dummyimage.com/1920x1080/000/fff',
}
