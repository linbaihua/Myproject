<template>
  <div id="app">
      <h2>{{msg}}</h2>
      <School/>
      <Student/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  data() {
    return {
      msg:'欢迎来到厦门理工'
    }
  },
  components: {
    School, Student
  },
}
</script>

<style>
    #app{
      background-color: rgb(190, 172, 149);
      padding: 20px;
    }
</style>

