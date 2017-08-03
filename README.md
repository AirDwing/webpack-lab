# webpack-lab

Webpack各项打包性能测试

## 初始压缩大小

- `react` 47.1 kB
- `react-dom` 230 kB
- `mobx` 55.7 kB
- 以上三个(`mixed3`) 284 kB 

## 优化步骤

### 以 mixed3 为例

1. 产品环境打包

```js
new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
  }
})
```

```bash
NODE_ENV=production webpack  --progress
```

缩小到 205 kB

2. 通用库抽离, 如 `react`, `jquery`, `echarts` 等

```js
// 示例
{
  entry: {
    bundle: 'app'
    vendor: ['react']
  }

  plugins: {
    new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js')
  }
}
```

文件大小:

- `app.js` 156 字节
- `common.js` 206 kB
- `vendor.js` 75字节

## 其他优化

### 分离css

插件: `extract-text-webpack-plugin`

```js
var ExtractTextPlugin = require("extract-text-webpack-plugin");

...

    loaders:[
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },

      ...

...

plugins: [
    ...

    new ExtractTextPlugin("bundle.css")
]
```
