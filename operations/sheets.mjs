#!/usr/bin/env node
/*
 * sheets.js - functionality to pull down and cache specific google sheet
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * testing playground to pull sheet data
 *
 * Distributed under terms of the APACHE license.
 */

import fs from 'fs'
import google from 'googleapis'

import ranges from './ranges.mjs'
import { json } from './json.mjs'

const pkg = json('../package.json')

const gs = google.google.sheets({version: 'v4', auth: pkg.cfg.apiKey})

const main = ranges['main']
const calc = ranges['calc']

gs.spreadsheets.values.batchGet({
  spreadsheetId: main.id,
    ranges: Object.values(main.ranges).map(o => Object.values(o)).flat()
}, (err, res) => {
  if (err) return console.log(err)

  gs.spreadsheets.values.batchGet({
    spreadsheetId: calc.id,
    ranges: Object.values(calc.ranges).map(o => Object.values(o)).flat()
  }, (err2, res2) => {
    if (err) return console.log(err)
    const data = {
      main: res.data,
      calc: res2.data,
    }
    fs.writeFileSync('data/sheets.json', JSON.stringify(data, null, 2))
  })
})
