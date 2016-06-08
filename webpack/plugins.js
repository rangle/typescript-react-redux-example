'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SplitByPathPlugin = require('webpack-split-by-path');

const basePlugins = [
  new webpack.DefinePlugin({
    __DEV__: process.env.NODE_ENV !== 'production',
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new SplitByPathPlugin([
    { name: 'vendor', path: [__dirname + '/node_modules/'] },
  ]),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    inject: 'body',
  }),
  new webpack.NoErrorsPlugin(),
];

const devPlugins = [
  new StyleLintPlugin({
    configFile: './.stylelintrc',
    files: ['src/**/*.css'],
    failOnError: false,
  }),
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }),
];

module.exports = basePlugins
  .concat(process.env.NODE_ENV === 'production' ? prodPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? devPlugins : []);
