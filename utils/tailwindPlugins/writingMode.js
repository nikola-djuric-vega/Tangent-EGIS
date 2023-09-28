const plugin = require('tailwindcss/plugin')

const writingMode = plugin(function ({ addUtilities }) {
  const newUtilities = {
    '.horizontal-tb': {
      writingMode: 'horizontal-tb',
    },
    '.vertical-rl': {
      writingMode: 'vertical-rl',
    },
    '.vertical-lr': {
      writingMode: 'vertical-lr',
    },
  }
  addUtilities(newUtilities, { variants: ['responsive'] })
})

module.exports = writingMode
