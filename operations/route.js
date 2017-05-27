#!/usr/local/bin/node

let fs = require('fs')

let Filters = require('../store/Filters.json')

let items = {}
let metros = []

for (let item in Filters.data) {
  items[Filters.data[item].State] = Filters.data[item].District
  if (Filters.data[item].Metro !== undefined) metros.push(Filters.data[item].Metro.split(','))
}

let routes = ['/error']

for (let state in items) {
  routes.push('/data/state/' + state.toLowerCase().replace(/ /, '-'))
}

for (let metro of metros) {
  for (let m of metro) {
    routes.push('/data/metro/' + m.trim().toLowerCase().replace(/ /, '-'))
  }
}

for (let state in items) {
  let lstate = state.toLowerCase().replace(/ /, '-')
  for (let i = 1; i !== items[state]; i++) {
    switch (i) {
      case 1:
        routes.push('/data/district/' + lstate + '-1st')
        break
      case 2:
        routes.push('/data/district/' + lstate + '-2nd')
        break
      case 3:
        routes.push('/data/district/' + lstate + '-3rd')
        break
      default:
        routes.push('/data/district/' + lstate + '-' + i + 'th')
        break
    }
  }
}

fs.writeFileSync('./store/routes.json', JSON.stringify(routes, null, 2))
