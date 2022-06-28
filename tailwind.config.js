/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const pkg = require('./package')
module.exports = {
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      oki: ['okomito regular', 'sans-serif'],
      okib: ['okomito bold', 'sans-serif'],
      os: ['Oswald', 'sans-serif'],
    },
    colors: pkg.cfg.colors,
    extend: {
      screens: {
        'print': {'raw': 'print'},
        'notprint': {'raw': 'not print'},
      },
    },
  },
  variants: {},
  plugins: []
}
