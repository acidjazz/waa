module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'We Are Apartments',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We Are Apartments.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Maven+Pro|Roboto' }
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
