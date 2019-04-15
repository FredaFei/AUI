const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    example: './example.tsx'
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      title: 'amui docs',
      template: path.resolve(__dirname, 'index.html'),
      filename: './index.html'
    })
  ]
})
