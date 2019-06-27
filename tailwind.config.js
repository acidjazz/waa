/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const pkg = require('./package')
module.exports = {
  theme: {
    fontFamily: {
      oki: ['okomito regular', 'sans-serif'],
      os: ['Oswald', 'sans-serif'],
    },
    colors: pkg.cfg.colors
  },
  variants: {},
  plugins: []
}
