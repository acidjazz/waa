/*
 * sheets.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import ranges from '@/ranges'
import sheets from '@/data/sheets'
export default {
  data () {
    return {
      ranges: ranges,
      sheets: sheets,
    }
  },
  methods: {
    getRange(range) {
      return this.sheets.valueRanges.find(s => s.range.replace(/'/g, '') === this.ranges[range]).values
    }
  }
}
