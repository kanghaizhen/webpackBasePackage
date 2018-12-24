'use strict'
module.exports = {
  config: {
    entry: './src/index.js',
    output: {
      // 打包输出目录
      path: 'dist',
      // 入口 js 的打包输出文件名
      filename: '[name].js'
    }
  },
  serve: {
    port: 8083,
    host: 'localhost'
  }
}
