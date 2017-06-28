
import test from 'ava'
import Nuxt from 'nuxt'
import { resolve } from 'path'

let nuxt = null
let server = null

const rootDir = resolve(__dirname, '..')
let config = {}
try { config = require(resolve(rootDir, 'nuxt.config.js')) } catch (e) {}
config.rootDir = rootDir // project folder
config.dev = false // production build

nuxt = new Nuxt(config).then(nuxt => {

  test.before('Initializing Nuxt.js', async t => {
    await nuxt.build()
    server = new nuxt.Server(nuxt)
    server.listen(4000, 'localhost')
  })

  test('Route / exits and renders HTML', async t => {
    let context = {}
    const { html } = await nuxt.renderRoute('/', context)
    t.true(html.includes('<div class="copy">The country needs 4.6 million new apartments by 2030. How many are needed near you?</div>'))
  })

  test.after('Closing the server and nuxt.js', t => {
    server.close()
    nuxt.close()
  })

})
