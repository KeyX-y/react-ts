const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  // 指定模式为开发模式
  mode: 'development',
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".ts", '.tsx', '.js', '.json']
  },
  // 解析处理模块的转化
  module: {
    // 遵循的规则
    rules: [
      {
        // 如果这个模块是.ts或者.tsx，则会使用ts-loader把代码转成es5
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        // 使用sourcemap调试
        // enforce:pre表示这个loader要在别的loader执行前执行
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  // 插件的配置
  plugins: [
    // 这个插件是生成index.html
    new HtmlWebpackPlugin({
      // 以哪个文件为模板，模板路径
      template: "./src/index.html",
      // 编译后的文件名
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 开发环境服务配置
  devServer: {
    // 启动热更新,当模块、组件有变化，不会刷新整个页面，而是局部刷新
    // 需要和插件webpack.HotModuleReplacementPlugin配合使用
    hot: true,
    // 静态资源目录
    contentBase: path.resolve(__dirname, 'dist')
  }
}