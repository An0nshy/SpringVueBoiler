const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../src/main/resources/public"),
  assetsDir: "../public",
  indexPath: "../templates/vue/index.html",// keep in root/src/
  pages: {
    user: {
      entry: 'user/main.js',
      template: 'src/public/index.html',
      filename: '../templates/vue/user.html',
    },
    src: {
      entry: 'src/main.js',
      template: 'src/public/index.html',
      filename: '../templates/vue/index.html',
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .use('url-loader')
      .tap(options => Object.assign({path: '/img/'}, options, { name: '[name].[hash].[ext]' }));
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
