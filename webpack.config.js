const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CheckerPlugin} = require('awesome-typescript-loader')

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    index: './packages/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      stylesheets: path.resolve(__dirname, 'stylesheets'),
      examples: path.resolve(__dirname, 'examples'),
      packages: path.resolve(__dirname, 'packages')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'AUI',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {name: '[path][name].[ext]'}
          }
        ]
      },
      {
        test: /\.md$/,
        use: 'raw-loader'
      },
      {
        test: /\.s([ac])ss$/,
        use: [
          devMode
            ? 'style-loader'
            : {
              loader: MiniCssExtractPlugin.loader,
              options: {}
            },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'stylesheets')]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
};
