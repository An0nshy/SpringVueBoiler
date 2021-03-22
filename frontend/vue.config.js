const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../src/main/resources/public/"),
  assetsDir: './',
  publicPath: '/',
  pages: {
    user: {
      entry: 'Modules/user/main.js',
      template: 'src/public/index.html',
      filename: '../templates/vue/user.html',
    },
  },
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
  }
}
