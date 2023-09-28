import 'swiper/swiper.min.css'
import 'swiper/components/effect-fade/effect-fade.min.css'
import '../styles/globals.css'
import * as nextImage from 'next/image'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})

export const parameters = {
  layout: {
    fullscreen: true
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
  },
}
