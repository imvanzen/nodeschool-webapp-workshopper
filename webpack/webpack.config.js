'use strict';

var webpack = require('webpack');
var CONFIG = require('./config');

const HOST = CONFIG.HOST;
const PORT = CONFIG.PORT;
const IS_PROD = CONFIG.IS_PROD;

var entry = './client';
var plugins;

// PROD
if (IS_PROD) {
  plugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}})
  ];
}

// DEV
if (!IS_PROD) {
  entry = [
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server'
  ].concat(entry);

  plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];
}

module.exports = {
  devtool: IS_PROD ? null : 'eval-source-map',
  entry,
  output: {
    filename: 'bundle.js',
    path: IS_PROD ? __dirname + `/../../public` : `/public`,
    publicPath: IS_PROD ? '/public/' : `http://${HOST}:${PORT}/public/`
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins,
  module: {
    loaders: [{
      exclude: [/node_modules/],
      loaders: IS_PROD ? ['babel'] : ['react-hot', 'babel'],
      test: /\.js$/
    }, {
      loader: 'style!css!sass',
      test: /\.scss$/
    }]
  }
};
