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

import pkg from './package.json'
import ranges from './ranges.mjs'

const gs = google.google.sheets({version: 'v4', auth: pkg.cfg.apiKey})

gs.spreadsheets.values.batchGet({
  spreadsheetId: pkg.cfg.sheetId,
  ranges: Object.values(ranges),
}, (err, res) => {
  if (err) return console.log(err)
  fs.writeFileSync('data/sheets.json', JSON.stringify(res.data))
})
