#!/usr/bin/env node

import filters from '../operations/filters.mjs'
import numeral from 'numeral'
import fs from 'fs'

let routes = []

filters.states().map(v => routes.push(`/data/${filters.encode(v)}`))
filters.metros().map(v => routes.push(`/data/${filters.encode(v)}`))
filters.metros().map((k,v) =>
  Array(v).fill().map((_, n) =>
    routes.push(`/data/${filters.encode(k)}-${numeral(n).format('0o')}`)))

fs.writeFileSync('./data/routes.json', JSON.stringify(routes, null, 2))
