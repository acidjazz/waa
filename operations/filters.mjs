// import sheets from '../data/sheets.json'

import { readFile } from 'fs/promises'
const sheets = JSON.parse(
  await readFile(
    new URL('../data/sheets.json', import.meta.url)
  )
);

export default {
  filters () {
    return sheets.main.valueRanges[0].values
  },
  states () {
    return this.filters().map(r => r[0])
      .sort( (a,b) => a.localeCompare(b) )
  },
  metros () {
    return [...new Set(this.filters()
      .map(l => l[2]
      .split(',')
      .map(m => m.trim()))
      .flat()
      .filter(Boolean))]
      .sort( (a,b) => a.localeCompare(b) )
  },
  districts () {
    return Object.assign(...this.filters().map(([key, , , districts]) => ({[key]: districts*1})))
  },
  encode (value) {
    return value.toString().trim().replace(/ |-/g, '_')
  },
}
