const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = require('./theme');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    vendor: ['react', 'react-dom', 'mobx']
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
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          `${require.resolve('css-loader')}?sourceMap&-autoprefixer`
        )
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          `${require.resolve('css-loader')}?sourceMap&-autoprefixer!` +
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    }),
    new ExtractTextPlugin('[name].css', {
      disable: false,
      allChunks: true
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
    })
  ]
};
