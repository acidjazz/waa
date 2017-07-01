#!/usr/local/bin/node

let xls = require('node-xlsx')
let fs = require('fs')

let ordinal = require('ordinal')
let excel = xls.parse('./operations/calculator.xlsx')

let datas = []

let sheets = [

  'Construction Impacts',
  'Operation Impacts',
  'Spending Impacts',
  'Construction Impacts (metro)',
  'Operation Impacts (metro)',
  'Spending Impacts (metro)',

]

for (let index in excel) {
  if (sheets.indexOf(excel[index].name) === -1) {
    continue
  }

  let sheet = excel[index]
  let data = {}

  data.sheet = sheet.name
  data.data = {}

  let labels = sheet.data[0]

  // remove 'Year' from our labels
  labels.shift()
  sheet.data.shift()
  data.labels = labels
  data.data = []

  data.data = {}
  for (let value in sheet.data) {
    if (sheet.data[value].length > 0) {
      data.data[[sheet.data[value].shift()]] = sheet.data[value]
    }
  }

  fs.writeFileSync('./static/' + sheet.name + '.json', JSON.stringify(data, null, 2))
}

