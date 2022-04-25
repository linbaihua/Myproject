
import Vue from 'vue'
import App from './App'
// 引入 store
// vue官方推荐就是 store中包含 index.js，所以路径写到 store就可以找到index.js
import store from './store'

Vue.config.productionTip = false

new Vue({
    el:'#app',
    render: h => h(App),
    // 配置 store 配置项
    // key = value时采用简写形式
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})