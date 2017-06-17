let config = {
  title: 'We Are Apartments: Learn about the demand for apartments in your area',
  description: 'America needs to build more than 4.6 million new apartments by 2030 through bold, innovative solutions that will help meet America’s housing shortfall.',
  url: 'https://weareapartments.org',
  image: '/share.jpg',
  keywords: 'affordable, data, apartments, census, calculator'
}
let routes = require('./store/routes.json')

module.exports = {
  /*
  ** Headers of the page
  */
  wconfig: config,
  head: {
    title: config.title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, minimal-ui' },
      { hid: 'description', name: 'description', content: config.description },
      { name: 'msapplication-config', content: '/icons/browserconfig.xml' },
      { name: 'theme-color', content: '#2f3e5d' },

      { 'http-equiv': 'X-UA-Compatible', content: 'IE: Edge, chrome: 1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset: UTF-8' },

      // facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: config.url },
      { property: 'og:title', content: config.title },
      { property: 'og:image', content: config.url + config.image },
      { property: 'og:description', content: config.description },

      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: config.title },
      { name: 'twitter:description', content: config.description },
      { name: 'twitter:image', content: config.url + config.image }

    ],

    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Maven+Pro:100,200,300,400,500|Roboto:100,400,700,900' },

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
    { src: '~assets/stylus/main.styl', lang: 'stylus' },
    'font-awesome/css/font-awesome.css',
  ],
  modules: [
    '@nuxtjs/font-awesome',
  ],
  plugins: [{src: '~plugins/ga.js', ssr: false}],
  build: {

    /*
     * various plugins like jQuery
     */
    // vendor: ['font-awesome/css/font-awesome.css'],
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

  /*
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      if (to.name.indexOf('data') !== -1 && from.name.indexOf('data') !== -1 && savedPosition) {
        return savedPosition
      }
    }
  },
  */

  generate: {
    routes: routes
  }
}
