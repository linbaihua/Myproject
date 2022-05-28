<template>
<!-- 使用toref后，就不用每次都写person.xxxx了 -->
    <h2>{{person}}</h2>
    <h3>{{name}}</h3>
    <h3>{{age}}</h3>
    <h3>{{job.j1.salary}}</h3>
    <button @click="name+='~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
</template>

<script>
    import {reactive, ref, toRef, toRefs} from 'vue'
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

        //     // 通过toref将person中name属性指给name2
        //    const name2 = toRef(person,'name') 
        //    console.log(name2);  //一个对象
        //    console.log(name2.value); //jack

            // 将整个person的一级对象ref出去
           const x = toRefs(person)
           console.log(x);

           return{
               person,
            //    name:toRef(person,'name'),
            //    age:toRef(person,'age'),
            //    salary:toRef(person.job.j1,'salary'),
            
            // torefs出去的是一个对象，使用...分割
               ...toRefs(person)
           }
        }
    }
</script>

<style>

</style>