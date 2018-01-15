module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'hello-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/hello-nuxt/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: ['~plugins/element-ui', { src: '~plugins/element-ui', ssr: false }],
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'element-ui'],
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      config.module.rules = config.module.rules.map((rule) => {
        if (rule.loader === 'babel-loader') {
          rule.exclude = /node_modules/
        }
        return rule
      })
    }
  },
  router: {
    base: '/hello-nuxt/'
  }
}
