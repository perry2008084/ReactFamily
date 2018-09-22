const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ]
  },
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.(css|scss)$/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9000
  },
  plugins: [
    new webpack.DefinePlugin({
      MOCK: true
    })
  ]
};

module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);