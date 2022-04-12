<template>
  <div>
    <!-- 如果传入的是number值，使用v-bind，传入的是一个表达式 -->
      <Student name='jack' sex='woman' :age='18'/>
      <Student name='mary' sex='woman' :age='19'/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
    name:'App',
    components:{Student}
}
</script>