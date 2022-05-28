<template>
    <hr>
    <h4>{{person}}</h4>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.j1.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
    <!-- 浅只读只会影响对象中第一层数据，深层次的数据可以响应 -->
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, readonly, shallowReactive, shallowReadonly, shallowRef, toRefs } from '@vue/reactivity'
    export default {
        name:'Demo',
        setup() {
            // shallowReactive：只处理对象最外层属性的响应式（浅响应式）
            let person = reactive({
                name:'jack',
                age:18,
                job:{
                    j1:{
                        salary:30
                    }
                }
            })

            //  让一个响应式数据变为只读的（深只读）
                // 对象中的所有数据都只读不能改
            // person = readonly(person)

            // 让一个响应式数据变为只读的（浅只读）
                // 对象中第一层数据是只读的，深层次的数据依然可以响应
            person = shallowReadonly(person)

            return {
                person,
                ...toRefs(person)
            }
        }
    }
</script>

<style>

</style>