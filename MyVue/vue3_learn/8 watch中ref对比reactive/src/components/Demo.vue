<template>
    <hr>
    <h2>姓名{{person1.name}}</h2>
    <h2>姓名{{person2.name}}</h2>
    <!-- 简单的函数实现可以直接在这里写 -->
    <button @click="person1.name+='~'">修改姓名1</button>
    <button @click="person2.name+='!!'">修改姓名2</button>
</template>

<script>
    import {ref,reactive,watch} from 'vue'
    export default {
        name:'Demo',
        setup() {
            // 对象使用reactive实现响应式原理
            let person1 = ref({
                name:'jack',
                age:18,
                job:{
                    a:{
                        salary:30
                    }
                }
            })
            let person2 = reactive({
                name:'mary',
                age:16,
                job:{
                    a:{
                        salary:20
                    }
                }
            })

            // 1 对ref定义的对象深度监视(使用value监视)
                // 本质是通过reactive的proxy代理监视
            /* watch(person1.value,(newValue,oldValue) => {
                console.log('person变了',newValue,oldValue);
            }) */

            // 2 开启deep对ref对象深度监视-本质reactive中proxy
            watch(person1,(newValue,oldValue) => {
                console.log('person1变了!!!',newValue,oldValue);
            },{deep:true})

            // 3 reactive定义的对象可以直接深度监视 
            watch(person2,(newValue,oldValue) => {
                console.log('person2变了!!!',newValue,oldValue);
            },{deep:true})

            // return要写在最后面,不然出错
            return{
                person1,
                person2
            }
        }
    }
</script>

<style>

</style>