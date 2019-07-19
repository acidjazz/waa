/*
 * fire.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import inViewport from 'vue-in-viewport-mixin'
export default {
  mixins: [ inViewport ],
  data () {
    return {
      fire: false,
    }
  },
  watch: {
    'inViewport.now' (visible) {
      if (visible) return this.fire = true
      if (!visible) return this.fire = false
    }
  },
}
