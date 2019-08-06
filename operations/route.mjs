#!/usr/bin/env node

import filters from '../operations/filters.mjs'
import numeral from 'numeral'
import fs from 'fs'

let routes = ['/data', '/error']

filters.states().map(v => routes.push(`/data/${filters.encode(v)}`))
filters.metros().map(v => routes.push(`/data/${filters.encode(v)}`))
Object.entries(filters.districts()).map( ([s,d]) => {
    Array(d).fill().map((_, n) => routes.push(`/data/${filters.encode(s)}-${numeral(n+1).format('0o')}`))
})
fs.writeFileSync('./data/routes.json', JSON.stringify(routes, null, 2))
