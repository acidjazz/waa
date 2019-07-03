/*
 * sheets.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import rangelist from '@/ranges'
import sheets from '@/data/sheets'
export default {
  data () {
    return {
      rangelist: rangelist,
      sheets: sheets,
    }
  },
  computed: {
    filters_data () {
      return this.sheets.valueRanges.find(s => s.range.replace(/'/g, '') === this.rangelist['Filters']).values
    },
    sheet_data () {
      return this.sheets.valueRanges.find(s => s.range.replace(/'/g, '') === this.rangelist[this.range]).values
    },
    sheets_data () {
      var sheets = {}
      for (let range in this.ranges) {
        sheets[range] = this.flatten(this.ranges[range], this.sheets.valueRanges.find(s => s.range.replace(/'/g, '') === this.rangelist[range]).values)
      }
      return sheets
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
  methods: {
    flatten (type, data) {
      switch (type) {
        case 'single':
          return data[0][0]
        case 'keyvalue':
          return data.reduce( (o,[k,v]) => (o[k]=v,o), {} );
      }
    }
  },
}
