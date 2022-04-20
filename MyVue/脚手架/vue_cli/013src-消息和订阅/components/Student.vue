<template>
  <div class="student">
      <h2>{{studentName}}</h2>
      <h2>{{age}}</h2>
      <button @click="sendStudentName">将学习姓名传递给school组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data() {
        return {
            studentName:'jack',
            age:18
        }
    },
    methods: {
        // 订阅发布
        sendStudentName(){
            pubsub.publish('hello',666)
        }
    },
}
</script>

<style>
    .student{
        background-color: rgb(86, 160, 135);
        padding: 5px;
        margin: 5px;
    }
</style>