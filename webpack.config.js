const path = require('path')
const HtmlWbpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';
const config = require('./public/siteConfig.js')[isDev ? 'dev' : 'build'];
module.exports = {
  devtool: isDev ? 'eval-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/ //排除 node_modules 目录
      },
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWbpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      config: config.template
      // hash: true
    }),
    //不需要传参数喔，它可以找到 outputPath
    new CleanWebpackPlugin()
  ],
  devServer: {
    port: '3000', //默认是8080
    compress: true //是否启用 gzip 压缩
  }
}