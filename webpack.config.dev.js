const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: './example.tsx'
  },
  plugins: [
    ...base.plugins,
    new HtmlWebpackPlugin({
      title: 'amui docs',
      template: path.resolve(__dirname, 'index.html'),
      filename: './index.html'
    })
  ]
})
