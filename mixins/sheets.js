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
  computed: {
    filters_data () {
      return this.sheets.valueRanges.find(s => s.range.replace(/'/g, '') === this.ranges['Filters']).values
    },
    sheet_data () {
      return this.sheets.valueRanges.find(s => s.range.replace(/'/g, '') === this.ranges[this.range]).values
    },

    filters_states () { return this.filters_data.map(r => r[0]) },
    filters_metros () {
      return this.filters_data
        .map(l => l[2]
        .split(',')
        .map(m => m.trim()))
        .flat()
        .filter(Boolean)
    },
    sheet_labels () { return this.sheet_data.map(r => r[0]*1 )},
    sheet_values () { return this.sheet_data.map(r => r[2]*1 )},
    sheet_oned () { return this.sheet_data.map(x => x[0]) },
  },
}
