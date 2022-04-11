
// html结构
<template>
  <div class="student">
      <h2>学生姓名:{{name}}</h2>
      <h2>学生年龄:{{age}}</h2>
      <button @click="sayHello">点我提示学生姓名</button>
  </div>
</template>

// 定义组件，提供数据
<script>
export default {
    // 组件名
    name:'Student',
    data() {
        return {
            name:'张三',
            age:18
        }
    },
    methods: {
        sayHello(){
            alert(this.name)
        }
    },
}
</script>

<style>
    .student{
        color: tomato;
        background-color: burlywood;
    }
</style>