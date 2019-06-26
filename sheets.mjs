#!/usr/bin/env node
/*
 * sheets.js - functionality to pull down and cache specific google sheet
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * testing playground to pull sheet data
 *
 * Distributed under terms of the APACHE license.
 */

// require('dotenv').config()
//

import ranges from './ranges.mjs'
import google from 'googleapis'
import fs from 'fs'
import env from 'dotenv'

env.config()

const gs = google.google.sheets({version: 'v4', auth: process.env.apiKey})

gs.spreadsheets.values.batchGet({
  spreadsheetId: process.env.sheetId,
  ranges: Object.values(ranges),
}, (err, res) => {
  if (err) return console.log(err)
  fs.writeFileSync('data/sheets.json', JSON.stringify(res.data))
})
