<template>
  <div >
      <button @click="isShow = !isShow">显示/隐藏</button>
      <transition appear>
        <h1 v-show="isShow">hello world</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
    h1{
        background-color: orange;
    }

    /* animation动画，指定动画名 */
    .v-enter-active{
        animation: hello 0.5s linear;
    }

    .v-leave-active{
        animation: hello 0.5s linear reverse;
    }

    @keyframes hello {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0%);
        }
    }
</style>