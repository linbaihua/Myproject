// 引入路由插件
import VueRouter from 'vue-router'

// 将components中组件引入进来
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Students from '../pages/Students'

export default new VueRouter({
    // 配置路由路径
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News,
                },
                {
                    path:'message',
                    component:Message,
                },
                {
                    path:'students',
                    component:Students,
                }
            ]
        }
    ]
})