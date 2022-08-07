const path = require('path')
module.exports = {
  mode: 'development',

  // 入口文件必须是 ./ 开头的相对路径或绝对路径
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    // 输出路径必须为 绝对路径
    path: path.resolve(__dirname, './build')
  }
}