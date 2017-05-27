module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'We Are Apartments',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We Are Apartments.' },
      { name: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { name: 'theme-color', content: '#2f3e5d' }
    ],

    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Maven+Pro|Roboto' },

      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'manifest', href: '/icons/manifest.json' },
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#2f3e5d' },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4da1ff' },
  /*
  ** Build configuration
  */
  css: [
    { src: '~assets/stylus/main.styl', lang: 'stylus' }
  ],
  build: {

    /*
     * various plugins like jQuery
     */
    // vendor: ['jQuery', 'chart.js'],
    // vendor: ['chart.js/chart.min.js'],
    // plugins: [ { src: '~/plugins/chart.js', ssr: false } ],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  generate: {
    routes: [
      '/error/',
      '/data/state/california',
      '/data/state/nebraska',
      '/data/state/virginia',
      '/data/state/illinois'
    ]
  }
}
