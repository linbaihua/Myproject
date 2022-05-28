<template>

</template>

<script>
import { customRef } from '@vue/reactivity'
  export default {
      name:'App',
      setup() {
        function myRef(value,delay){
          let timer
          // customeref是vue提供的工具，track是追踪数据变化，trigger是重新解析模板
          return customRef((track,trigger) => {
            return{
              get(){
                console.log(`有人从myRef这个容器中读取了数据,我把${value}给他了`);

                // 2 通知vue追踪value的变化（提前和get商量一下，让他认为这个value是有用的
                track()
                return value
              },
              set(newValue){
                console.log(`有人把myRef这个容器的数据改为了${newValue}`);
                clearTimeout(timer)
                timer = setTimeout(() =>{
                  value = newValue
                  trigger() // 1 通知vue去重新解析模板
                },delay)
              }
            }
          })
        }

        // 使用程序员自定义的ref
        let keyWord = myRef('hello',500)

        return {keyWord}
      }
  }
</script>

<style>

</style>