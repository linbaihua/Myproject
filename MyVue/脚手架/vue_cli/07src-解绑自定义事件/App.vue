<template>
  <div id="app">
    <!-- 1 子组件通过调用父组件函数给父组件传数据 -->
      <School :getSchoolName='getSchoolName'/>
      <!-- 2 自定义一个事件，子组件给这个自定义事件传数据 -->
      <Student @atguigu='getStudentName' ref='student' @demo='fun1'/>
      <!-- 3 通过ref拿到student vc -->
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School, Student
  },
  methods: {
    getSchoolName(value){
      alert(value)
    },
    getStudentName(value){
      alert(value)
    },
    getStudentAge(age){
      alert(age)
    },
    fun1(){
      console.log('自定义事件demo');
    }
  },
  mounted() {
    this.$refs.student.$on('event1',this.getStudentAge)
  },
}
</script>

<style>
    #app{
      background-color: rgb(97, 81, 60);
      padding: 20px;
    }
</style>

