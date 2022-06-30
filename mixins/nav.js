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
          names: ['data-loc'],
          route: '/data',
          gradient: 'bg-gradtrue',
          color: 'trueblue',
        },
        /*
        {
          label: 'latest news',
          names: ['articles'],
          route: '/articles',
          gradient: 'bg-gradgreen',
          color: 'persiangreen',
        },
        */
        {
          label: 'apartment calculator',
          names: ['calculator', 'results'],
          route: '/calculator',
          gradient: 'bg-gradpurp',
          color: 'magenta',
        },
        /*{
          label: 'the initiative',
          names: ['initiative'],
          route: '/initiative',
          color: 'tacao',
          gradient: 'bg-gradred',
        },*/
        {
          label: 'our vision',
          names: ['vision'],
          route: '/vision',
          color: 'daisybush',
          gradient: 'bg-graddaisy',
        },
      ]
    }
  }
}
