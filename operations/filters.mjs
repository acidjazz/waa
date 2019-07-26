import sheets from '../data/sheets.json'

export default {
  filters () {
    return sheets.main.valueRanges[0].values
  },
  states () {
    return this.filters().map(r => r[0])
  },
  metros () {
    return [...new Set(this.filters()
      .map(l => l[2]
      .split(',')
      .map(m => m.trim()))
      .flat()
      .filter(Boolean))]
  },
  districts () {
    return Object.assign(...this.filters().map(([key, ab, metros, districts]) => ({[key]: districts*1})))
  },
  encode (value) {
    return value.toString().trim().replace(/ |-/g, '_')
  },
}
