<template>
    <h4>{{x.y}}</h4>
    <button @click="x={y:888}">点我替换x</button>
    <button @click="x.y++">点我x.y++</button>
    <hr>
    <h4>{{z}}</h4>
    <button @click="z++">点我z++</button>
    <hr>
    <h4>{{person}}</h4>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.j1.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
    <!-- 因为是shallowreactive，只能监视对象的第一次数据，深层次的数据不能响应 -->
	<button @click="job.j1.salary++">涨薪</button>
</template>

<script>
import { reactive, shallowReactive, shallowRef, toRefs } from '@vue/reactivity'
    export default {
        name:'Demo',
        setup() {
            // shallowReactive：只处理对象最外层属性的响应式（浅响应式）
            let person = shallowReactive({
                name:'jack',
                age:18,
                job:{
                    j1:{
                        salary:30
                    }
                }
            })

            //  shallowRef：只处理基本数据类型的响应式, 不进行对象的响应式处理
            let x = shallowRef({
                y:0
            })
            console.log('xxxxxx',x);
            // shallowRef可以监视基本数据类型的响应式
            let z = shallowRef(666)

            return {
                person,
                x,
                z,
                ...toRefs(person)
            }
        }
    }
</script>

<style>

</style>