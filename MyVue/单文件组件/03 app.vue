
<template>
  <div>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
// app中引入别的组件
import School from "./01 school.vue";
import Student from "./02 student.vue";

// 导出app组件
export default {
  name:'App',
  //   注册组件
  components: {
    School,
    Student
  }
}
</script>
