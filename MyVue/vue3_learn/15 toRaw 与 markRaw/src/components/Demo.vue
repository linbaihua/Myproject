<template>
    <hr>
    <h4>{{person}}</h4>
	<h2>姓名：{{name}}</h2>
	<h2>年龄：{{age}}</h2>
	<h2>薪资：{{job.j1.salary}}K</h2>
    <h3 v-show="person.car">座驾{{person.car}}</h3>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="job.j1.salary++">涨薪</button>
    <br>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给人添加一台车</button>
    <button @click="person.car.name+='!'">换车名</button>
    <button @click="changePrice">换价格</button>
</template>

<script>
import { markRaw, reactive, readonly, shallowReactive, shallowReadonly, shallowRef, toRaw, toRefs } from '@vue/reactivity'
    export default {
        name:'Demo',
        setup() {
            let person = reactive({
                name:'jack',
                age:18,
                job:{
                    j1:{
                        salary:30
                    }
                }
            })

            function showRawPerson(){
                // 将一个由```reactive```生成的响应式对象转为普通对象
                // 这里将person的数据赋给一个普通对象p，对这个p对象的修改不会影响到person
                const p = toRaw(person)
                p.age++
                console.log(p);
            }

            function addCar(){
                let car = {name:'奔驰',price:40}
                // 标记一个对象，使其永远不会再成为响应式对象
                // 被标记之后这个数据就不能够变化了
                person.car = markRaw(car)
            }

            // 增加车的价格，但是car已经被mrakraw了，所以不会响应
            function changePrice(){
                person.car.price++
                console.log(person.car.price);
            }

            return {
                person,
                ...toRefs(person),
                showRawPerson,
                addCar,
                changePrice
            }
        }
    }
</script>

<style>

</style>