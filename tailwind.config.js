const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#313131',
      gray: {
        darkest: '#525252' /* Text Grey */,
        dark: '#848484' /* Primary Grey 1 */,
        DEFAULT: '#CACACA' /* Secondary Grey 2 */,
        light: '#E6E6E6' /* Secondary Grey 3 */,
        lightest: '#F1F1F1' /* Secondary Grey 4 */,
      },
      'egis-green': '#ABC022',
      'midnight-blue': '#09212C',
      'blue-320': '#009AA6',
      'teal-blue': '#00617E',
      'steel-gray': {
        darkest: '#5D858B' /* Medium Steel Grey */,
        dark: '#97B8BB' /* Light Steel Grey */,
        DEFAULT: '#C4DBDD' /* Extra Light Steel Grey */,
        light: '#D6ECEE' /* XXL Steel Grey */,
        lightest: '#F0F9FA' /* XXXL Steel Grey */,
      },
      'parma-jue': '#75A1D2',
      'super-lime': '#D5F311',
      'super-lime-light': '#F6FCCF',
      white: '#FFFFFF',
      red: '#FF4242',
    },
    boxShadow: {
      blackShadow: '0px -4px 15px 3px rgba(9, 33, 44, 0.15)',
      blackShadowMobile: '0px 6px 10px 3px rgba(9, 33, 44, 0.1)',
    },
    container: {
      center: true,
    },
    letterSpacing: {
      tightest: '-2px',
      tighter: '-1px',
      tight: '-0.5px',
      normal: '0',
      wide: '0.2px',
      wider: '1',
      widest: '2px',
    },

    extend: {
      outline: {
        red: '1px solid #E95D5D',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-bullets': theme('colors.egis-green'),
            p: {
              fontFamily: `${theme('fontFamily.serif')}`,
              fontSize: '18px',
              lineHeight: '26px',
              letterSpacing: theme('letterSpacing.wide'),
              color: theme('colors.midnight-blue'),
              margin: `0 0 ${theme('spacing.8')}`,
            },
            ul: {
              margin: `0 0 ${theme('spacing.8')}`,
              paddingLeft: `${theme('spacing.5')}`,
            },
            'ul>li': {
              margin: `0 0 ${theme('spacing.3')}`,
              '&::marker': {
                backgroundColor: theme('colors.egis-green'),
                fontSize: '1.2rem',
              },
            },
            'ul>li>*:last-child': {
              margin: 0,
            },
            'ul>li>*:first-child': {
              margin: 0,
            },
            'p+ul, p+ol': {
              marginTop: `calc(${theme('spacing.5')} * -1)`,
            },
          },
        },
        light: {
          css: {
            p: {
              color: '#fff',
            },
            h6: {
              color: '#fff',
            },
            a: {
              color: '#fff',
            },
          },
        },
        lead: {
          fontSize: 22,
          lineHeight: '30px',
        },
      }),
      transitionProperty: {
        transform: 'transform',
        maxHeight: 'm-height',
        width: 'width',
        height: 'height',
      },
      transitionDuration: {
        400: '400ms',
        3000: '3000ms',
        5500: '5500ms',
      },
      width: {
        '5/10': '50%',
        '9/10': '90%',
        homePageGreenLine: '83.65%',
        '23rem': '23rem',
      },
      fontSize: {
        '7xl': '5rem',
      },
      maxWidth: {
        '2/4': '50%',
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': -1,
        '-10': '-10',
        99: 99,
        100: 100,
        110: 110,
      },
      minHeight: {
        nav: 'calc(100vh - 70px)',
      },
      height: {
        nav: 'calc(100vh - 70px)',
        '690px': '690px',
        '810px': '810px',
      },
      maxHeight: {
        '810px': '810px',
      },
      inset: {
        '70px': '70px',
        100: '100%',
      },
      fontFamily: {
        sans: ['Codec Pro', 'sans-serif'],
        serif: ['EB Garamond', 'serif'],
      },
      rotate: {
        135: '135deg',
      },
      lineHeight: {
        'extra-large': '6.25rem',
        20: '5rem',
        large: '3.75rem',
        medium: '2.625rem',
      },
      borderWidth: {
        3: '3px',
      },
      borderOpacity: {
        13: '0.13',
      },
      keyframes: {
        'fade-out': {
          '0%': {
            opacity: '1',
            visibility: 'visible',
          },
          '99%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
            visibility: 'hidden',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            visibility: 'visible',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s linear',
        'fade-out': 'fade-out 0.3s linear',
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('./utils/tailwindPlugins/writingMode'),
    require('./utils/tailwindPlugins/scrollbarHide'),
    require('./utils/tailwindPlugins/responsiveNav'),
    require('./utils/tailwindPlugins/caretColour'),
    require('tailwind-hamburgers'),
  ],
}
