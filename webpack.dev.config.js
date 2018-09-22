const path = require('path');
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, 'src/index.js')
    ]
  },
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 9000
  }
};

module.exports = merge({
  customizeArray(a, b, key) {
    if (key === 'entry.app') {
      return b;
    }
    return undefined;
  }
})(commonConfig, devConfig);