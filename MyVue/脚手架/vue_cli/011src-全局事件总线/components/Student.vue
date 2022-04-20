<template>
  <div class="student">
      <h2>{{studentName}}</h2>
      <h2>{{age}}</h2>
      <button @click="sendStudentName">将学习姓名传递给school组件</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            studentName:'jack',
            age:18
        }
    },
    methods: {
        sendStudentName(){
            this.$bus.$emit('hello',this.studentName)
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