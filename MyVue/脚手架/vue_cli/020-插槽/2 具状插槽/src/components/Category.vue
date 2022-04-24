<template>
  <div class="category">
      <h3>{{title}}</h3>
      <slot name="center">定义一个插槽（挖个坑，等着组件的使用者进行填充）</slot>
      <slot name="footer">定义一个插槽（挖个坑，等着组件的使用者进行填充）</slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props: ['title']
    }
</script>

<style> 
    .category{
        background-color: skyblue;
        width: 300px;
        height: 400px;
    }
    h3{
        text-align: center;
        background-color: orange;
    }
</style>