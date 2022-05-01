// 引入路由插件
import VueRouter from 'vue-router'

// 将components中组件引入进来
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Students from '../pages/Students'

const vueRouter =  new VueRouter({
    // 配置路由路径
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            // meta配置项里面可以写程序自己定义的key-value
            meta:{isAuth:true,title:'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                    // 独享路由守卫，和前置路由守卫差不多
       /*              beforeEnter: (to, from, next) => {
                        if (to.meta.isAuth) { //判断是否鉴权
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('无权限查看')
                            }
                        } else {
                            next()
                        }
                    } */
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'消息'},
                    children:[
                        {
                            // 命名路由
                            name:'xuesheng',
                            path:'students',
                            component:Students,
                            meta:{title:'相机'},
                            props($route){
                                return{
                                    id:$route.query.id,
                                    name:$route.query.name
                                }
                            }
                        }
                    ]
                },

            ]
        },
    ]
})

// 前置路由守卫，初始化时和每次路由切换之前被调用
// 路由守卫，to是去哪里，from是从哪里来，next是给谁通过
/* vueRouter.beforeEach((to,from,next) => {
    if (to.meta.isAuth) { //判断是否鉴权
        if (localStorage.getItem('school') === 'atguigu') {
            alert('用户权限正确')
            next()
        } else {
            alert('无权限查看')
        }
    } else {
        next()
    }
})  */

// 后置路由守卫，初始化的时候被调用、每次路由切换之后被调用
vueRouter.afterEach((to,from) => {
    // 修改网页的标题
    document.title = to.meta.title || '硅谷系统'
})

export default vueRouter