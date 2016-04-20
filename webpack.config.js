var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: '././components/App.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      }
    ]
  },
};
