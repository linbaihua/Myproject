// vue是一个不完整的vue，里面没有模板解析器
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#App',
  // render是一个函数，h也是函数，参数指定vue组件
  render: h => h(App),
})

/* 
   关于不同版本的vue
    
      1 vue.js 和 vue.rentime.xxx.js的区别
        -vue.js是完整版的vue，包含核心功能和模板解析器（体积大概占了三分之一）
        -vue.runtime.xxx.js是运行版的vue，只包含核心功能去掉了模板解析器

      2 因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项
        需要使用render函数接收 createelement函数去指定组件
*/