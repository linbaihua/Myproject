<template>
  <h2>{{canon}}</h2>
  <h2>{{nikon}}</h2>
  <ul>sony
    <li>{{sony.first}}</li>
    <li>{{sony.second}}</li>
  </ul>
  <button @click="changeDate">点我更改数据</button>
</template>

<script>

// 引入ref函数
import {ref} from 'vue'

export default {
  name: 'App',
  /* vue3中将数据和方法都放在setup中 */
  setup() {
    // 使用ref函数将数据引用实现
    const canon = ref('canon')
    const nikon = ref('nikon')
    // ref也可以引用实现模板
    const sony = ref({
      first:'sonym3',
      second:'sonym4'
    })

    function changeDate(){
        console.log(canon,nikon);
        canon.value = 'canon 5d3'
        nikon.value = 'nikon z62'
        // 使用ref对模板数据进行更改
        sony.value.first = 'sonys3'
        sony.value.second = 'sonys2'
    }

    return{
      canon,
      nikon,
      sony,
      changeDate
    }
  }
}
</script>
