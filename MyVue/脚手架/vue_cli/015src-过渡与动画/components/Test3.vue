<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition-group 
        name='animate__animated animate__bounce'
        enter-active-class="animate__bounceIn"
        leave-active-class="animate__bounceOut"
        >
         <h1 v-show="isShow" key="001">你好啊!!!</h1>
         <h1 v-show="isShow" key="002">吃了没!!!</h1>
      </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
    name:'Test3',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style>
    h1{
        background-color: orchid;
    }
</style>