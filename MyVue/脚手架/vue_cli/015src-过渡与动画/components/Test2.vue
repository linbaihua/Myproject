<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition-group name="test2">
         <h1 v-show="isShow" key="001">你好啊!!!</h1>
         <h1 v-show="isShow" key="002">吃了没!!!</h1>
      </transition-group>
  </div>
</template>

<script>
export default {
    name:'Test2',
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
    /* 进入的起点，离开的终点 */
    .test2-enter,.test2-leave-to{
        transform: translateX(-100%);
    }
    /* 进入的终点，离开的起点 */
    .test2-enter-to,.test2-leave{
        transform: translateX(0%);
    }
    /* 离开和进入的过渡效果 */
    .test2-enter-active,.test2-leave-active{
        transition: 0.5s linear;
    }
</style>