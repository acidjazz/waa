#!/usr/local/bin/node

let fs = require('fs')

let ordinal = require('ordinal')

let Filters = require('../static/Filters.json')

let items = {}
let metros = []

for (let item in Filters.data) {
  items[Filters.data[item].State] = Filters.data[item].District
  if (Filters.data[item].Metro !== undefined) metros.push(Filters.data[item].Metro.split(','))
}

let routes = ['/error']

for (let state in items) {
  routes.push('/data/state/' + state.toLowerCase().replace(/ /g, '-'))
}

for (let metro of metros) {
  for (let m of metro) {
    routes.push('/data/metro/' + m.trim().toLowerCase().replace(/ /g, '-'))
  }
}

for (let state in items) {
  let lstate = state.toLowerCase().replace(/ /g, '-')
  for (let i = 1; i <= items[state]; i++) {
    routes.push('/data/district/' + lstate + '-' + ordinal(i))
  }
}

fs.writeFileSync('./static/routes.json', JSON.stringify(routes, null, 2))
