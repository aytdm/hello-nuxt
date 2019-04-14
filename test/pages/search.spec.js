import test from 'ava'
import { initializeServer, closeServer, getNuxt } from '../helpers/init.nuxt'

// Init Nuxt.js and create a server listening on localhost:4000
test.before('Init Nuxt.js', initializeServer)

test('Route /search', async t => {
  let nuxt = getNuxt()
  const { html } = await nuxt.renderRoute('/search')
  t.pass()
})

// Close the Nuxt server
test.after('Closing server and nuxt.js', closeServer)
