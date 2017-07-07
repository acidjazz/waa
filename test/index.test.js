
import test from 'ava'
import Nuxt from 'nuxt'
import { resolve } from 'path'

let nuxt = null
let server = null

test.before('Initializing Nuxt.js', async t => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  nuxt = new Nuxt(config)
  await nuxt.build()
  server = new nuxt.Server(nuxt)
  server.listen(4000, 'localhost')
})

test('Route / exits and renders HTML', async t => {
  let context = {}
  const { html } = await nuxt.renderRoute('/', context)
  t.true(html.includes('<div class="copy">welcome to we are apartments.</div>'))
})

test.after('Closing the server and nuxt.js', t => {
  server.close()
  nuxt.close()
})

