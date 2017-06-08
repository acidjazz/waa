#!/usr/local/bin/node

let xls = require('node-xlsx')
let fs = require('fs')

let ordinal = require('ordinal')
let excel = xls.parse('./operations/data.xlsx')

let datas = []

let sheets = [

  // filters
  'Filters',

  // DataSummary, residents, homes, and contribution
  'US Apt Residents',
  'State Apt Residents',
  'Metro Apt Residents',
  'District Apt Residents',

  'US Apts',
  'State Apartments',
  'Metro Occupied Apartments',
  'District Occupied Apts',

  'US Economic Contribution',
  'State Economic Contribution',
  'Metro Economic Contribution',
  'District Economic Contribution',

  'US Jobs',
  'State Jobs',
  'Metro Jobs',
  'District Total Jobs',

  // Natinoal Page - Apt Household Growth

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

  switch (sheet.name) {

    case 'Filters':
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
      }
      break

    case 'US Apt Residents':
    case 'State Apt Residents':
    case 'Metro Apt Residents':
    case 'US Apts':
    case 'State Apartments':
    case 'Metro Occupied Apartments':
    case 'US Economic Contribution':
    case 'State Economic Contribution':
    case 'Metro Economic Contribution':
    case 'US Jobs':
    case 'State Jobs':
    case 'Metro Jobs':
      data.data = {}
      for (let value in sheet.data) {
        if (sheet.data[value].length > 0) {
          data.data[[sheet.data[value][0]]] = sheet.data[value][1]
        }
      }
      break

    case 'District Apt Residents':
    case 'District Occupied Apts':
    case 'District Economic Contribution':
    case 'District Total Jobs':
      data.data = {}
      for (let value in sheet.data) {
        if (sheet.data[value].length > 0) {
          data.data[[sheet.data[value][0]] + ' ' + ordinal(sheet.data[value][1])] = sheet.data[value][2]
        }
      }
      break

    default:
      for (let value in sheet.data) {
        if (sheet.data[value].length > 0) {
          data.data.push(sheet.data[value])
        }
      }
      break

  }

  fs.writeFileSync('./store/' + sheet.name + '.json', JSON.stringify(data, null, 2))
}

