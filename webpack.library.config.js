const { join } = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  entry: './src/App.js',
  output: {
    path: join(__dirname, 'lib'),
    libraryTarget: 'commonjs',
    filename: 'component.js'
  },
  plugins: [],
  externals: {
    react: 'react',
    'styled-components': 'styled-components'
  }
})
