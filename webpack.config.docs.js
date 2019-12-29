const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')

module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: './example.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'docs/'),
  },
  plugins: [
    ...base.plugins,
    new HtmlWebpackPlugin({
      title: 'AUI of React',
      template: path.resolve(__dirname, 'index.html'),
      filename: './index.html'
    })
  ]
})
