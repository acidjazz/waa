#!/usr/local/bin/node

let xls = require('node-xlsx')
let fs = require('fs')

let excel = xls.parse('./operations/data.xlsx')

let datas = []

let sheets = ['Filters']

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

  if (sheet.name === 'Filters') {
    for (let value in sheet.data) {
      let left = sheet.data[value][0]
      if (left !== undefined) {
        sheet.data[value].shift()
      }

      data.data.push({
        State: left,
        Abbeviation: sheet.data[value][0],
        Metro: sheet.data[value][1],
        District: sheet.data[value][2]
      })

      /*
      for (let subvalue in sheet.data[value]) {
        data.data[left][labels[subvalue]] = sheet.data[value][subvalue]
      }
      */
    }
  } else {
    for (let value in sheet.data) {
      let left = sheet.data[value][0]
      if (left !== undefined) {
        sheet.data[value].shift()
        data.data[left] = {}
        data.data[left] = sheet.data[value]
      }
    }
  }
  // datas.push(data)
  fs.writeFileSync('./store/' + sheet.name + '.json', JSON.stringify(data, null, 2))
}

