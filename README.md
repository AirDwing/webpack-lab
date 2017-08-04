# React/Antd 项目初始化

## 1. 配置 eslint

- 创建: `.eslintrc` 和 `.eslintignore`
- 安装: `yarn add --dev eslint eslint-config-dwing eslint-config-airbnb eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint`

## 2. 配置 babel

- 创建: `.babelrc`
- 安装: `yarn add --dev babel-preset-env babel-preset-react babel-plugin-transform-runtime babel-plugin-transform-decorators-legacy babel-plugin-import babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread babel-runtime babel-polyfill babel-core`

## 3. 安装 react/antd 等

- 安装: `yarn add react react-dom react-router antd mobx`
- webpack相关: `yarn add --dev babel-loader less less-loader css-loader postcss-loader autoprefixer`

## 4. 配置 webpack

- 创建: `webpack.config.js` (用作产品) `webpack.config.dev.js` (用作开发)
- 安装: `yarn add --dev webpack html-webpack-plugin extract-text-webpack-plugin`
