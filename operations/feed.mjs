
import fs from 'fs'
import yaml from 'yaml'
import https from 'https'

async function sleep (milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function get_page(url) {
  return new Promise((resolve) => {
    let data = ''
    https.get(url, res => {
      res.on('data', chunk => { data += chunk })
      res.on('end', () => resolve(data))
    })
  })
}

const config = yaml.parse(fs.readFileSync('data/medium.yml', 'utf8'))
const feed = []
for (const article of config.articles) {
  await sleep(200)
  const html = await get_page(article.url)
  let title, description, image = null
  let match = /<title data-rh="true">(.*?)\|.*<\/title>/.exec(html)
  if (match) title = match[1]
  else console.log(article.url, html)
  match = /<meta data-rh="true" name="description" content="(.*?)"\/>/.exec(html)
  if (match) description = match[1]
  else console.log(article.url, html)
  match = /<meta data-rh="true" property="og:image" content="(.*?)"\/>/.exec(html)
  if (match) image = match[1]
  else console.log(article.url, html)

  feed.push({
    url: article.url,
    title,
    description,
    image,
    featured: article.featured ?? false,
    frontpage: article.frontpage ?? false,
  })
}
fs.writeFileSync('data/feed.json', JSON.stringify(feed, null, 2))
