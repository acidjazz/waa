/*
 * count.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import numeral from 'numeral'
import fire from '@/mixins/fire'
import inViewport from 'vue-in-viewport-mixin'
export default {
  mixins: [ inViewport, fire ],
  methods: {
    count_val (value,format='0.00a') {
      if (!this.fire) return 0
      return numeral(value).format(format).slice(0, -1)*1
    },
    count_opts (value, prefix='',decimals=1,format='0,0a') {
      return {
        prefix: prefix,
        decimalPlaces: decimals,
        suffix: numeral(value).format(format).slice(-1).toUpperCase(),
      }
    },
  },
}
