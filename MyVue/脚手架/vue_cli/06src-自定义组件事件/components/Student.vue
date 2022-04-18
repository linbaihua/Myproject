<template>
  <div class="student">
      <h2>{{studentName}}</h2>
      <h2>{{age}}</h2>
      <button @click="sendStudentlName">把学生名给App</button>
      <button @click="sendStudentlAge">把学生年龄给App</button>
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
        sendStudentlName(){
            this.$emit('atguigu', this.studentName)
        },
        sendStudentlAge(){
            this.$emit('event1', this.age)
        }
    },
}
</script>

<style>
    .student{
        background-color: rgb(25, 73, 57);
        padding: 5px;
    }
</style>