import React from 'react'
import { render, waitFor } from '@testing-library/react'
import VideoBackgroundBanner from './VideoBackgroundBanner'

const data = {
  category: 'Sustainability.',
  title: 'Our commitment to a greener future.',
  introText:
    'We believe that every project should commit to improving the world we live in. That’s why we’ve issued a Sustainable Development Charter to pledge our commitment and contribution to a more sustainable economy.',
  video: 'http://techslides.com/demos/sample-videos/small.mp4',
  link: { name: 'Read more', url: '/home-page/about' },
  preloadImage: { url: 'https://dummyimage.com/1920x1080/000/fff' },
}

describe('VideoBannerComponent', () => {
  it('should render VideoBannerComponent', () => {
    const { container } = render(<VideoBackgroundBanner {...data} />)
    expect(container.firstChild).toBeTruthy()
  })
})
