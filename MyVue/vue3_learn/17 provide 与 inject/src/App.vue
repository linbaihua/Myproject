<template>
    <div class="app">
      <h3>app父组件：{{name}}--{{price}}</h3>
      <Child/>
    </div>
</template>

<script>
  import { reactive, toRefs } from '@vue/reactivity'
  import Child from './components/Child.vue'
  import { provide } from '@vue/runtime-core'
  export default {
      name:'App',
      components:{Child},
      setup() {
        let car = reactive({
          name:'奔驰',
          price:'40w'
        })
        // 将父组件的car对象发出去
        provide('car',car)

        return {...toRefs(car)}
      }
  }
</script>

<style>

</style>