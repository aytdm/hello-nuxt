const browserEnv = require('browser-env')
const hooks = require('require-extension-hooks')
const Vue = require('vue')
const Vuex = require('vuex')

Vue.use(Vuex)

// Setup a fake browser environment
browserEnv()

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks('vue').plugin('vue').push()
// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(['vue', 'js']).plugin('babel').push()
