const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack:{
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
      }
    }
  },
  'devServer':{
    'port':3000,
    'proxy':{
      '/api': {
        target: 'http://localhost:8080', // 你要请求的目标接口地址
        changeOrigin: true, // 改变请求的源
        pathRewrite: {
          '^/api': '', // 将URL中的/api路径替换为空字符串
        },
        headers: {
          'Access-Control-Allow-Origin': '*', // 添加此行
        },
      }
    }    
  },
})
