import test from 'ava'
import Nuxt from 'nuxt'
import { resolve } from 'path'

// keep the nuxt and server instnace so we can close 'em at the end
let nuxt = null
let server = null

test.before('Init Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // projet folder
  config.dev = false // prod build
  nuxt = new Nuxt(config)
  await nuxt.build()
  server = new nuxt.Server(nuxt)
  server.listen(4000, 'localhost')
})

test('Route / exits and render HTML', async t => {
  let context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<div class="page home">'))
})

test.after('Closing server and nuxt.js', t => {
  server.close()
  nuxt.close()
})
