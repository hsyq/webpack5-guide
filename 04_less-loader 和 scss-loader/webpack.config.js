const path = require('path')
module.exports = {
  mode: 'development',

  // 入口文件必须是 ./ 开头的相对路径或绝对路径
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    // 输出路径必须为 绝对路径
    path: path.resolve(__dirname, './dist')
  },

  // module 用来配置处理模块
  module: {
    // rules 是一个数组, 每一项是针对某类模块的一种配置；可以有若干个配置
    rules: [
      // 规则有几个常用的属性
      {
        // 通过正则表达式指定匹配的模块类型
        test: /\.css$/,

        // 使用哪种 loader 进行处理
        // loader 的生效是有顺序的，从右到左，也就是先用 css-loader 处理 webpack 能识别的内容，再经 style-loader 将样式插入到页面中
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.less$/,
        // loader 从右到左执行，经过 less-loader 转为 css，再经 css-loader 转为 webpack 识别的模块，最后插入到页面中
        use: ['style-loader', 'css-loader', 'less-loader'],
      },

      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  }
}