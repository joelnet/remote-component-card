const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  analyzerMode: 'static',
  openAnalyzer: false
})

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [bundleAnalyzerPlugin]
}
