const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../src/main/resources/public/"),
  assetsDir: './',
  publicPath: '/',
  css: {
    extract: {
      filename: 'css/[name].css',
    },
  },
  configureWebpack: {
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    }
  },
  pages: {
    login: {
      entry: 'Modules/login/main.js',
      template: 'public/index.html',
      filename: '../templates/vue/login.html',
      title: 'Login'
    },
    user: {
      entry: 'Modules/user/main.js',
      template: 'public/index.html',
      filename: '../templates/vue/user.html',
      title: 'user'
    },
  },
}
