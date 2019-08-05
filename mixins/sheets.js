/*
 * sheets.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import rangeconfig from '@/operations/ranges'
import filters from '@/operations/filters'
import sheets from '@/data/sheets'
export default {

  computed: {
    filters () { return filters.filters() },
    states () { return filters.states() },
    metros () { return filters.metros() },
    districts () { return filters.districts() },
  },

  methods: {

    state_from_metro(metro) {
      return this.filters.find(([key, ab, metros]) => metros.split(',').map(m => m.trim()).includes(metro))[0]
    },

    sheet (name, range, key) {
      var result = {}
      let config = rangeconfig[name].ranges[range]

      if (typeof key === 'string' || typeof key === 'object') {
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
              row[this.key(labels[j])] = this.cleanse(values[i][j])
          if (typeof key === 'object') {
            result[`${this.key(row[this.key(key[0])])}_${row[this.key(key[1])]}`] = row
          } else {
            result[this.key(row[this.key(key)])] = row
          }
        }
      }
     return result
    },

    find_values(name, range) {
      return sheets[name].valueRanges.find( (r) => r.range === range).values
    },
    key (value) {
      return value.toString().trim().replace(/ |-/g, '_')
    },
    keyspace (value) {
      return value.toString().trim().replace(/ /g, '_')
    },
    value (key) {
      return key.replace(/_|-/g, ' ')
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
