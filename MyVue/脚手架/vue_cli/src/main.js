
import Vue from 'vue'
import App from './App'

// 引入element ui组件库
import ElementUI from 'element-ui';
// 引入element ui组价库全部样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
// 使用element ui组件库（插件）
Vue.use(ElementUI);


new Vue({
    el:'#app',
    render: h => h(App),
})

