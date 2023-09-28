const plugin = require('tailwindcss/plugin')

const responsiveNav = plugin(function ({ addComponents }) {
  const newComponent = {
    '.container': {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 'calc(100% - 2.5rem)',
      '@screen md': {
        maxWidth: '95%',
      },
      '@screen 2xl': {
        maxWidth: '1280px',
      },
    },
  }

  addComponents(newComponent, ['responsive'])
})

module.exports = responsiveNav
