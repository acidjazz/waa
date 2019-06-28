/*
 * nav.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
export default {
  data () {
    return {
      options: [
        {
          label: 'home',
          name: 'index',
          route: '/',
        },
        {
          label: 'apartment data',
          name: 'data',
          route: '/data',
        },
        {
          label: 'latest news',
          name: 'news',
          route: '/articles',
        },
        {
          label: 'apartment calculator',
          name: 'calculator',
          route: '/calculator',
        },
        {
          label: 'the initiative',
          name: 'initiative',
          route: '/initiative',
        },
        {
          label: 'our vision',
          name: 'vision',
          route: '/vision',
        },
      ]
    }
  }
}
