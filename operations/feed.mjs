
import fs from 'fs'
import https from 'https'

/*
https.get('https://medium.com/we-are-apartments/latest?format=json', (res) => {
  var body = ''
  res.on('data', (chunk) => {
    body += chunk
  })

  res.on('end', () => {
    // let result = JSON.parse(body.substr(16))
  })


})
*/

let result = fs.readFileSync('data.js', 'utf8')
fs.writeFileSync('data/feed.json', result)


// https://medium.com/we-are-apartments/latest?format=json
