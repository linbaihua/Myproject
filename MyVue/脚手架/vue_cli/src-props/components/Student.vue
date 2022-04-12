<template>
  <div>
      <h2>{{name}}</h2>
      <h2>{{sex}}</h2>
      <!-- 动态接收数据做准备 -->
      <h2>{{ageProp}}</h2>
      <button @click="addAge">点击修改学生年龄</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            // 动态接收数据做准备
            ageProp: this.age
        }
    },
    methods: {
        addAge(){
            this.ageProp++
        }
    },
    // 简单声明接收动态数据（开发常用）
    // props:['name', 'sex', 'age']

    // 接收的同时指定数据的类型限制
    /* props:{
        name:String,
        sex:String,
        age:Number
    } */
    props:{
        name:{
            // 指定数据类型
            type:String,
            // name是否必要
            required:true
        },
        sex:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            // 设置默认值，一般default和required不同时使用
            // 都必要了还设置默认值干什么
            default:99
        }
    }
}
/* 
    1 props
        -作用 达到组件复用的目的，可以动态的在使用组件标签的时候设置
            data中的变量值
        -动态修改  因为使用pops使用的是在标签中动态接收的数据，所以在
            直接更改不了，使用一个变量接收它，过度一下

*/
</script>