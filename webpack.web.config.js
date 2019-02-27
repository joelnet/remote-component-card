const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const copyPlugin = new CopyWebpackPlugin([{ from: 'public' }])

module.exports = merge(common, {
  plugins: [htmlPlugin, copyPlugin]
})
