/*
 * sheets.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import rangeconfig from '@/ranges'
import sheets from '@/data/sheets'
export default {

  computed: {
    filters () {
      return sheets.main.valueRanges[0].values
      /*
      sheets.main.valueRanges.find(s => {
        return s !== undefined && s.range === ranges.main.ranges.Filters.data
      }).values
      */
    },
    states () { return this.filters.map(r => r[0]) },
    metros () {
      return this.filters
        .map(l => l[2]
        .split(',')
        .map(m => m.trim()))
        .flat()
        .filter(Boolean)
    },

  },

  methods: {
    sheet (name, range, key) {
      var result = {}
      let config = rangeconfig[name].ranges[range]
      if (!Number.isInteger(key) && key !== false) {
        let labels = this.find_values(name, config.labels)[0]
      }
      let values = this.find_values(name, config.values)
      if (key === false) {
        return values
      }
      for (let i in values) {
        let row = {}
        if (Number.isInteger(3)) {
          result[values[i][0]] = this.cleanse(values[i][key])
        } else {
          for (let j in values[i])
            if (values[i][j] !== '')
              row[labels[j].trim().replace(/ |-/g, '_')] = this.cleanse(values[i][j])
          result[row[key].trim().replace(/ |-/g, '_')] = row
        }
      }
     return result
    },

    find_values(name, range) {
      console.log(name, range)
      return sheets[name].valueRanges.find( (r) => r.range === range).values
    },
    cleanse (value) {
      value = value.trim().replace(/,/g, '')
      if (value.match(/^[0-9\.-]+$/) !== null) {
        return value*1
      }
      return value
    },
  },

  /*
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
      return this.sheetdata['main'].valueRanges.find(s => s.range.replace(/'/g, '') === this.rangelist['main'].ranges['Filters']).values
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
  */
}
