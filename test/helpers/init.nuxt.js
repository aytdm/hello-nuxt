const { Nuxt, Builder } = require('nuxt')
const { resolve } = require('path')

let nuxt = null
let config = {}
let isBuild = false

function initializeServer (t) {
  try {
    const rootDir = resolve(__dirname, '../../')
    config = require(resolve(rootDir, 'nuxt.config.js'))
    config.rootDir = rootDir // project folder
    config.dev = false // production build
    nuxt = new Nuxt(config)
    return BuildNuxt(nuxt)
      .then((b) => {
        return RunNuxt(nuxt)
      })
      .then(() => {
        t.nuxt = nuxt
        return t
      })
  } catch (e) {
    return Promise.reject(e)
  }
}

function BuildNuxt (nuxt) {
  return new Promise((resolve, reject) => {
    if (!isBuild) {
      new Builder(nuxt).build()
        .then((r) => {
          isBuild = true
          resolve(r)
        })
        .catch(reject)
    } else {
      resolve()
    }
  })
}

function RunNuxt (nuxt) {
  return new Promise((resolve, reject) => {
    try {
      if (nuxt.ready) {
        resolve(nuxt)
      } else {
        nuxt.listen(4000, 'localhost', () => {
          resolve(nuxt)
        })
      }
    } catch (e) {
      reject(e)
    }
  })
}

function closeServer (t) {
  isBuild = false
  return nuxt.close()
}

function getNuxt () {
  return nuxt
}

function getConfig () {
  return config
}

module.exports = {
  closeServer,
  getConfig,
  getNuxt,
  initializeServer
}
