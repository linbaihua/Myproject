const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  	//开启代理服务器（方式一）
	/*  devServer: {
    proxy: 'http://localhost:5000'
  },  */
  // 开启代理服务器（方式二）
  devServer:{
    proxy:{
      '/toStudents':{
        target:'http://localhost:5000',
        // 重写路径，第一个是匹配的正则，第二个是代替
        pathRewrite:{'^/toStudents':''},
      },
      'toCars':{
        target:'http://localhost:5001',
        pathRewrite:{'^/toCars':''},

        // 下面这两个不写也默认是TRUE，但是react中默认是false
        // ws:true, //用于支持websocket
        // changeOrigin:true  //控制请求头中的host值
      }
    }
  }
})
