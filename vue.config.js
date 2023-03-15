const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  publicPath: process.env.VUE_APP_PUBLICPATH,
  lintOnSave: false,
  productionSourceMap: false,  // 生产环境的 source map
  chainWebpack: config => {
    config.output.filename('[name].[hash:16].js').end()
    // config.plugin('webpack-bundle-analyzer')
      // .use(BundleAnalyzerPlugin)
    config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin({
      'flattening': true,
      'paths': true,
      'shorthands': true,
    }));
  },
  configureWebpack: config => {
    config.entry.app = ["babel-polyfill", "./src/main.js"];
    const plugins = [];
    plugins.push(
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
    );
    config.plugins = [...config.plugins, ...plugins];
  },
  // publicPath: '/static/dist',
  //抛出全局变量
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, 'src/utils/index.less'),
      ],
    }
  },
}
