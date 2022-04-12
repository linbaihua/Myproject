
export const mixin1 = {
    methods: {
        sayHello(){
            alert(this.type)
        }
    },
}

export const mixin2 = {
    data() {
        return {
            series:'camera'
        }
    },
}


/* 
    mixin 混合
        -提高代码的复用效率
        -将相同的方法或者数据存放在一个js中配置，然后引入组件
        -使得多个要使用相同方法或者数据的组件只用配置一个混合引入就可以了

    步骤
        -在mixin.js文件中配置混合，并export出来
        -在组件中import并配置mixins项
*/