
import Vue from 'vue'
import App from './App.vue'

new Vue({
    el:'#app',
    // 引入不完整的vue时使用render函数，因为没有模板解析器
    render: h => h(App)
})