/*
 * sheets.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import rangelist from '@/ranges'
import sheetdata from '@/data/sheets'
export default {
  data () {
    return {
      sheetName: 'main',
      rangelist: rangelist,
      sheetdata: sheetdata,
    }
  },
  computed: {
    sheets () {
      return this.sheetdata[this.sheetName]
    },
    filters_data () {
      return this.sheets.valueRanges.find(s => s.range.replace(/'/g, '') === this.rangelist['main'].ranges['Filters']).values
    },
    sheet_data () {
      return this.sheets.valueRanges.find(s => s.range.replace(/'/g, '') === this.rangelist[this.sheetName].ranges[this.range]).values
    },
    sheets_data () {
      var sheets = {}
      for (let range in this.ranges) {
        sheets[range] = this.flatten(this.ranges[range], range, this.sheets.valueRanges.find(s => s.range.replace(/'/g, '') === this.rangelist[this.sheetName].ranges[range]).values)
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
    cleanse (value) {
      value = value.trim().replace(/,/g, '')
      if (value.match(/^[0-9]+$/) !== null) {
        return value*1
      }
      return value

    },
    flatten (type, range, data) {
      switch (type) {
        case 'single':
          return data[0][0]
        case 'keyvalue':
          return data.reduce( (o,[k,v]) => (o[k]=this.cleanse(v),o), {} );
        case 'keyvalues':
          let kva = {}
          for (let row of data) {
            let kvb = {}
            for (let index in row) {
              if (this.sheetKeys[range][index]) {
                kvb[this.sheetKeys[range][index]] = this.cleanse(row[index].trim())
              }
            }
            kva[row[0].replace(/ /, '_')] = kvb
          }
          return kva
      }
    }
  },
}
