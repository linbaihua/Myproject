export default {
    install(Vue,x,y,z){
        Vue.filter('mySlice', function(value){
            return value.slice(0,4)
        })
    }
}

/* 
    插件
        -作用 增强vue
        -本质  包含install方法的一个对象，install的第一个参数时vue，
            第二个以后的参数时自己传入的数据
        -定义插件
            -一般定义一个 plugins.js
            -定义install方法
            -export
        -使用插件
            -在main.js中 Vue.use(plugins,参数)
        
        -后面会用到很多别人功能强大的插件

*/