<template>
    <h1>一个人的信息</h1>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>{{msg}}</h2>
    <h2>{{school}}</h2>
    <button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name:'Demo',
        // props简写形式用数组，全写形式用对象
        //props接收app传来的msg,school
        /* 如果这里不适用props接收，就会有另一个 attrs接收，访问的时候
        this.$attrs.xxx */
        props:['msg','school'],

        // vue3中最好声明分发给自定义事件
        emits:['hello'],

        // props就是上面的props，接收其它组件传来的数据
        // context上下文对象，包括attrs,slots(插槽),emit(分发)
        setup(props,context) {
            console.log('---props----',props);
            console.log('---context-----',context);
            // 因为上面props接收了，所以attrs中就什么都没有
            console.log('---context.attrs---',context.attrs);
            console.log('---context.slots---',context.slots); //插槽
            console.log('---context.emit---',context.emit); //emit
            // 数据
            let person = reactive({
                name:'jack',
                age:18
            })

            function test(){
                // 发给app中的hello事件
                context.emit('hello',666)
            }

            return{
                person,
                test
            }
        },
    }
</script>

<style>

</style>