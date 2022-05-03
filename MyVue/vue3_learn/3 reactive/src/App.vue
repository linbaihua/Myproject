<template>
  <ul>
    <li>{{person.name}}</li>
    <li>{{person.age}}</li>
    <li>{{person.job.type}}</li>
    <li>{{person.job.a.b.c}}</li>
    <li>{{person.hobby[0]}}</li>
  </ul>
  <button @click="changeDate">点我更改数据</button>
</template>

<script>

// 引入ref函数
import {reactive} from 'vue'

export default {
  name: 'App',
  setup() {
    // 将所有数据都写再reactive中
    const person = reactive({
        name:'jack',
        age:18,
        job:{
          type:'前端工程师',
          salary:'30k',
          a:{
            b:{
              c:666
            }
          }
        },
        hobby:['canon','nikon']
    })

    // setup中的方法必须写function
    function changeDate(){
        person.name = 'mary',
        person.age = 16,
        person.hobby[0] = 'lecia',
        person.job.a.b.c = 888
    }
    return{
      person,
      changeDate
    }
  }
}
</script>
