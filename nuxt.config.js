import pkg from './package'

let config = {
  title: 'We Are Apartments: Learn about the demand for apartments in your area',
  description: 'America needs to build more than 4.6 million new apartments by 2030 through bold, innovative solutions that will help meet America’s housing shortfall.',
  url: 'https://weareapartments.org',
  image: '/share.jpg',
  keywords: 'affordable, data, apartments, census, calculator',
  google_client_id: '207669859559-qjcp4bc61omt9sp2hv9to3gukuqreno6.apps.googleusercontent.com',
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
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

    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik:100,200,300,400,500,700,900' },
      { rel: 'stylesheet', href: '/mdi.css' },

      { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
      { rel: 'manifest', href: '/icons/manifest.json' },
      { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#2f3e5d' },
      { rel: 'shortcut icon', href: '/icons/favicon.ico' }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#4da1ff' },
  /*
  ** Global CSS
  */
  css: [
    // '@/static/bulma.css',
    '@/assets/css/tailwind.css',
    '@/assets/stylus/main.styl',
    // '@/static/mdi.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/countup.client.js',
    '@/plugins/viewport.client.js',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-tag-manager', { id: 'GTM-NP9HJPR', pageTracking: false }],
    'nuxt-purgecss',
    ['@nuxtjs/pwa', { manifest: false }],
  ],
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
    extend(config, ctx) {
    }
  }
}
