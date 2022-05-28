<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>当前的信息为：{{msg}}</h2>
    <button @click="msg+='!'">修改信息</button>
    <hr>
    <h2>姓名{{person.name}}</h2>
    <h2>年龄{{person.age}}</h2>
    <h2>薪资{{person.job.a.salary}}</h2>
    <!-- 简单的函数实现可以直接在这里写 -->
    <button @click="person.name+='~'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.a.salary++">涨薪</button>
</template>

<script>
    import {ref,reactive,watch} from 'vue'
    export default {
        name:'Demo',
        setup() {
            // 基本类型用ref实现响应式原理
            let sum = ref(0)
            let msg = ref('你好!!')
            // 对象使用reactive实现响应式原理
            let person = reactive({
                name:'jack',
                age:18,
                job:{
                    a:{
                        salary:30
                    }
                }
            })


            // 1 监视ref所定义的一个响应式数据
            watch(sum,(newValue,oldValue) => {
                console.log('sum变了',newValue,oldValue);
            },{immediate:true})
            // immediate立即监听,sum还没有变化就可以监听

            // 2 监视ref定义的多个响应式基本数据类型
            /* watch([sum,msg],(newValue,oldValue) => {
                console.log('sum or msg has been changed',newValue,oldValue);
            },{immediate:true}) */

            // 3 监视reactive定义的一个对象
                /* -此处无法获取正确的oldvalue
                    -强制开启了深度监视deep
                    -reactive中定义的全部数据都可以检测到 */
            watch(person,(newValue,oldValue) => {
                console.log('person has changed',newValue,oldValue);
            },{deep:false}) // 此处的deep配置无效

            // 4 监视reactive定义对象中的一个属性
            /* watch(() => person.name,(newValue,oldValue) => {
                console.log('person的name发生了变化',newValue,oldValue);
            }) */

            // 5 监视reactive定义对象中的多个属性
            // watch([() => person.name,() => person.age],(newValue,oldValue) => {
            //     console.log('person中的name or age发生了变化',newValue,oldValue);
            // })

            /* // 6 监视reactive对象中深层次的数据
            watch(() => person.job, (newValue,oldValue) => {
                console.log('person中的job发生了变化',newValue,oldValue);
            },{deep:true})
            // 监视的时reactive定义对象中的下一级对象,deep有效 */

            // return要写在最后面,不然出错
            return{
                sum,
                msg,
                person
            }
        }
    }
</script>

<style>

</style>