import test from 'ava'
import { initializeServer, closeServer, getNuxt } from './helpers/init.nuxt'

// Init nuxt.js and create server listening on localhost:4000
test.before('Init Nuxt.js', initializeServer)

test('Vendor', async t => {
  let nuxt = getNuxt()
  const vendor = nuxt.options.build.vendor
  t.true(!!~vendor.indexOf('axios'), 'axios added to config')
})

test('Plugin', async t => {
  let nuxt = getNuxt()
  const plugins = nuxt.options.plugins
  t.is(plugins[0].src, '~/plugins/element-ui', 'element-ui plugin added to config')
  t.is(plugins[1].src, '~/plugins/vue-scrollto', 'vue-scrollto plugin added to config')
  t.is(plugins[2].src, '~/plugins/filters', 'filters plugin added to config')
})

// Example of testing only generated html
test('Routing / valid and able to render HTML', async t => {
  let nuxt = getNuxt()
  const { html } = await nuxt.renderRoute('/')
  t.true(html.includes('<div id="__nuxt">'))
})

// Close the Nuxt server
test.after('Closing server and nuxt.js', closeServer)
