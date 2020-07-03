const path =  require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index'
  ],
  // module: {
  //   loaders: [
  //     {
  //       test: /(\.scss$|\.css$)/,
  //       exclude: /node_modules/,
  //       include: path.resolve(__dirname, 'src', 'styles'),
  //       loaders: ['style-loader', 'css-loader', 'sass-loader'],
  //     },
  //   ],
  // },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
  ],
});
