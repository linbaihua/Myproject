<template>
  <div class="student">
      <h2>{{studentName}}</h2>
      <h2>{{age}}</h2>
      <h2>{{number}}</h2>
      <button @click="add">number++</button>
      <button @click="sendStudentlName">把学生名给App</button>
      <button @click="sendStudentlAge">把学生年龄给App</button>
      <button @click="fun1">自定义事件event2</button>
      <button @click="unbind">解绑自定义事件</button>
      <button @click="death">销毁当前Student组件的实例</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            studentName:'jack',
            age:18,
            number:0
        }
    },
    methods: {
        add(){
            this.number++
        },
        sendStudentlName(){
            this.$emit('atguigu', this.studentName)
        },
        sendStudentlAge(){
            this.$emit('event1', this.age)
        },
        fun1(){
            this.$emit('demo')
        },
        unbind(){
            // this.$off('event1') //解绑一个
            // this.$off(['atguigu','event1']) //解绑多个
            this.$off() //解绑所有自定义事件
            alert('解绑自定义事件成功')
        },
        death(){
            this.$destroy() //销毁当前的student的vc组件
            /* 销毁vc，绑定在vc上的自定义事件都被销毁 */
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