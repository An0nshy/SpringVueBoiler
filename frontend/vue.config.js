const path = require("path");
const webpack = require("webpack")

module.exports = {
  outputDir: path.resolve(__dirname, "../src/main/resources/public"),
  //assetsDir: path.resolve(__dirname, "../src/main/resources/public/img"),
  //indexPath: "../templates/vue/index.html",// keep in root/src/
  pages: {
    user: {
      entry: 'Modules/user/main.js',
      template: 'src/public/index.html',
      filename: '../templates/vue/user.html',
    },
  },
  chainWebpack: config => {
    config.plugin('copy')
      .tap(args => {
        args[0].push({
          from: path.resolve(__dirname, 'public/'),
          to: path.resolve(__dirname, '../src/main/resources/public/img'),
          toType: 'dir',
          ignore: ['.DS_Store']
        })
        return args
      })
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
