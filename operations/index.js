let xls = require('node-xlsx')
let fs = require('fs')

let excel = xls.parse('./operations/data.xlsx')

let datas = []

for (let index in excel) {
  let sheet = excel[index]
  let data = {}

  data.sheet = sheet.name
  data.data = {}

  let labels = sheet.data[0]

  // remove 'Year' from our labels
  labels.shift()
  sheet.data.shift()

  for (let value in sheet.data) {
    let left = sheet.data[value][0]
    sheet.data[value].shift()
    data.data[left] = {}
    for (let subvalue in sheet.data[value]) {
      data.data[left][labels[subvalue]] = sheet.data[value][subvalue]
    }
  }

  datas.push(data)
}

fs.writeFileSync('./operations/data.json', JSON.stringify(datas, null, 2))
