<template>
    <h2>当前求和为：{{sum}}</h2>
	<button @click="sum++">点我+1</button>
	<hr>
	<h2>当前的信息为：{{msg}}</h2>
	<button @click="msg+='！'">修改信息</button>
	<hr>
	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<h2>薪资：{{person.job.a.salary}}K</h2>
	<button @click="person.name+='~'">修改姓名</button>
	<button @click="person.age++">增长年龄</button>
	<button @click="person.job.a.salary++">涨薪</button>
</template>

<script>
    import {ref,reactive,watch, watchEffect} from 'vue'
    export default {
        name:'Demo',
        setup() {
            let sum = ref(0)
            let msg = ref('hello')

            let person = reactive({
                name:'mary',
                age:16,
                job:{
                    a:{
                        salary:20
                    }
                }
            })
            
            // 要监视哪个直接在这里面的回调函数指定监视属性
            // ref就指定value,reactive就具体到哪个属性
            watchEffect(() => {
                const x1 = sum.value
                // const x2 = person.job.a.salary
                const x3 = person.age
                console.log('watchEffect所指定的回调执行了');
            })

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