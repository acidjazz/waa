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
          label: 'apartment data',
          name: 'data',
          route: '/data',
          gradient: 'bg-gradblue',
          color: 'coolblue',
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
          gradient: 'bg-gradpurp',
          color: 'magenta',
        },
        {
          label: 'the initiative',
          name: 'initiative',
          route: '/initiative',
          color: 'tacao',
          gradient: 'bg-gradred',
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
