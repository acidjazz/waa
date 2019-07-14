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
    filters () { return sheets.main.valueRanges[0].values },
    states () { return this.filters.map(r => r[0]) },
    metros () {
      return [...new Set(this.filters
        .map(l => l[2]
        .split(',')
        .map(m => m.trim()))
        .flat()
        .filter(Boolean))]
    },
    districts () {
      return Object.assign(...this.filters.map(([key, ab, metros, districts]) => ({[key]: districts*1})))
    },

  },

  methods: {
    sheet (name, range, key) {
      var result = {}
      let config = rangeconfig[name].ranges[range]

      if (typeof key === 'string') {
        var labels = this.find_values(name, config.labels)[0]
      }

      let values = this.find_values(name, config.values)
      if (key === false) {
        return values
      }
      for (let i in values) {
        if (Number.isInteger(key)) {
          result[values[i][0]] = this.cleanse(values[i][key])
        } else {
          let row = {}
          for (let j in values[i])
            if (values[i][j] !== '')
              row[labels[j].trim().replace(/ |-/g, '_')] = this.cleanse(values[i][j])
          result[row[key].toString().trim().replace(/ |-/g, '_')] = row
        }
      }
     return result
    },

    find_values(name, range) {
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
}
