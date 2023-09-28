import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import VideoOverlay from './VideoOverlay'

export default {
  title: 'Molecules/VideoOverlay',
  component: VideoOverlay,
} as ComponentMeta<typeof VideoOverlay>

const Template: ComponentStory<typeof VideoOverlay> = (args) => (
  <div className="container">
    <VideoOverlay {...args} />
  </div>
)

export const YoutubePlayer = Template.bind({})
YoutubePlayer.args = {
  videoUrl: 'https://www.youtube.com/watch?v=ykRvyc9CRMA',
  image: 'images/videoplayer.png',
  supportingText:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perferendis at ullam velit! Nisi eos ipsa distinctio eveniet quidem veritatis.',
}

export const VimeoPlayer = Template.bind({})
VimeoPlayer.args = {
  videoUrl: 'https://vimeo.com/564562016',
  image: 'images/videoplayer.png',
  supportingText:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti perferendis at ullam velit! Nisi eos ipsa distinctio eveniet quidem veritatis.',
}
