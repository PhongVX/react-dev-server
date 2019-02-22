const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname, 'source'),
  entry: {
    react_bundle: './react/App.js'
  },
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'source', 'react'),
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    inline: true,
    stats: 'errors-only'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
}
