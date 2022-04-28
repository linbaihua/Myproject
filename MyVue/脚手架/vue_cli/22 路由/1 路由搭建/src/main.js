
import Vue from 'vue'
import App from './App'
// 引入路由插件
import VueRouter from 'vue-router'
// 引入路由配置文件
import router from './router'


Vue.config.productionTip = false
// 使用路由插件
Vue.use(VueRouter)

new Vue({
    el:'#app',
    render: h => h(App),
    router,
})

