let config = {
  title: 'We Are Apartments: Learn about the demand for apartments in your area',
  description: 'America needs to build more than 4.6 million new apartments by 2030 through bold, innovative solutions that will help meet America’s housing shortfall.',
  url: 'https://weareapartments.org',
  image: '/share.jpg',
  keywords: 'affordable, data, apartments, census, calculator'
}
let routes = require('./static/routes.json')

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
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: config.url },
      { hid: 'og:image', property: 'og:image', content: config.url + config.image },

      { hid: 'og:title', property: 'og:title', content: config.title },
      { hid: 'og:description', property: 'og:description', content: config.description },

      // twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: config.url + config.image },

      { hid: 'twitter:title', name: 'twitter:title', content: config.title },
      { hid: 'twitter:description', name: 'twitter:description', content: config.description },

    ],

    script: [
      { src: "//cdnjs.cloudflare.com/ajax/libs/outdated-browser/1.1.5/outdatedbrowser.min.js" },
      // { innerHTML: "function addLoadEvent(func) { var oldonload = window.onload; if (typeof window.onload != 'function') { window.onload = func; } else { window.onload = function() { if (oldonload) { oldonload(); } func(); } } } addLoadEvent(function(){ console.log('test one two'); outdatedBrowser({ bgColor: '#f25648', color: '#ffffff', lowerThan: 'filter', languagePath: '/en.html' }) });" },
      // { innerHTML: "alert('hi');" },

      { src: "//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js" },
      { src: "//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.bundle.min.js" },
      { src: "//cdnjs.cloudflare.com/ajax/libs/axios/0.16.2/axios.min.js" },
      { src: "//cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.4/js.cookie.min.js" },
    ],
    __dangerouslyDisableSanitizers: ['script'],

    link: [
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Maven+Pro:100,200,300,400,500|Roboto:100,400,700,900' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik:100,200,300,400,500,700,900' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/outdated-browser/1.1.5/outdatedbrowser.min.css' },

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
  css: [{ src: '~assets/stylus/main.styl', lang: 'stylus' }],
  plugins: [
    {src: '~plugins/ga.js', ssr: false},
    // {src: '~plugins/outdated.js', ssr: false},
  ],
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      if (to.name.indexOf('data') !== -1 && from.name.indexOf('data') !== -1) {
        return savedPosition
      }
      return { x: 0, y: 0 }
    }
  },
  build: {
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
  generate: { routes: routes }
}
