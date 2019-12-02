const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CheckerPlugin} = require('awesome-typescript-loader')
const highlight = require('highlight.js')
const marked = require('marked')

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
    library: 'awesome-ui',
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
      // {
      //   test: /\.md$/,
      //   use: 'raw-loader'
      // },
      {
        test: /\.(md)$/,
        use: [
          'html-loader',
          {
            loader: 'markdown-loader',
            options: {
              highlight: (code, lang) => {
                console.log('code')
                console.log(code)
                console.log('lang')
                console.log(lang)
                console.log(marked(`<pre class="hljs">${code}</pre>`))

                if (!lang || ['text', 'literal', 'nohighlight'].includes(lang)) {
                  return `<pre class="hljs">${code}</pre>`;
                }
                const html = highlight.highlight(lang, code).value;
                console.log('html')
                console.log(html)
                return marked(`<pre class="hljs">${html}</pre>`)
                // return `<span class="hljs">${html}</span>`;
              },
            },
          },
        ],
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
