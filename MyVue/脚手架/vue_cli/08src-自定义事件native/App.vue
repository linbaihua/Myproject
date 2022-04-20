<template>
  <div id="app">
    <h2>学生姓名是:{{studentName}}</h2>
    <h2>学生年龄是:{{studentAge}}</h2>
    <!-- 1 子组件通过调用父组件函数给父组件传数据 -->
    <!-- native,在父组件的子标签中使用原生事件，加一个修饰子 native -->
      <School :getSchoolName='getSchoolName' @click.native="fun2"/>
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
  data() {
    return {
      studentName:'',
      studentAge:null
    }
  },
  components: {
    School, Student
  },
  methods: {
    getSchoolName(value){
      alert(value)
    },
    getStudentName(value){
      alert(value)
      this.studentName = value
    },
    getStudentAge(age){
      alert(age)
      this.studentAge = age
    },
    fun1(){
      console.log('自定义事件demo');
    },
    fun2(){
      alert('我是原生事件')
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

