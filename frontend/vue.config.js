const path = require("path");
const webpack = require("webpack")

module.exports = {
  outputDir: path.resolve(__dirname, "../src/main/resources/public"),
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
      chunkFilename: 'css/[name].css',
    },
  },
  configureWebpack: {
    output: {
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    }
  }
}
