<template>
    <Demo @hello='showHelloMsg' msg='你好啊' school='尚硅谷'>
      <!-- 传递插槽 -->
        <template v-slot:qwe>
            <span>尚硅谷</span>
        </template>
        <template v-slot:asd>
            <span>尚硅谷</span>
        </template>
        
    </Demo>
</template>

<script>
  import Demo from './components/Demo.vue'
  export default {
    name: 'App',
    // vue的各个配置项都是以对象形式配置的
    components:{Demo},

    beforeCreate() {
      console.log('执行beforeCreate');
    },
    setup() {
      // setup在beforeCreate之前执行
        console.log('执行setup');

        function showHelloMsg(value){
          alert(`你触发了hello事件，我收到的参数时：${value}`)
        }
        return{
          showHelloMsg,
        }
    }
  }
</script>
