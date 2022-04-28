// 引入路由插件
import VueRouter from 'vue-router'

// 将components中组件引入进来
import About from '../components/About'
import Home from '../components/Home'

export default new VueRouter({
    // 配置路由路径
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})