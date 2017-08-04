/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = require('./theme');
const rucksack = require('rucksack-css');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: ['react', 'react-dom', 'mobx'],
    others: ['moment']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          `${require.resolve('css-loader')}?sourceMap&-autoprefixer!` +
          `${require.resolve('postcss-loader')}`
        )
      },
      {
        test(filePath) {
          return /\.less$/.test(filePath) && !/\.module\.less$/.test(filePath);
        },
        loader: ExtractTextPlugin.extract(
          `${require.resolve('css-loader')}?sourceMap&-autoprefixer!` +
          `${require.resolve('postcss-loader')}!` +
          `${require.resolve('less-loader')}?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
        )
      },
      {
        test: /\.module\.less$/,
        loader: ExtractTextPlugin.extract(
          `${require.resolve('css-loader')}?sourceMap&-autoprefixer!` +
          `${require.resolve('postcss-loader')}!` +
          `${require.resolve('less-loader')}?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
        )
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          rucksack(),
          autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4']
          })
        ]
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    // 或灵活配置
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    //   }
    // }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      output: {
        comments: false
      },
      compress: {
        warnings: false,
        drop_console: false
      }
    }),
    new ExtractTextPlugin('style.css', {
      disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
};
