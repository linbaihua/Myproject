<template>
  <div class="category">
      <h3>{{title}}</h3>
      <slot :camera='camera' msg='hello'>定义一个插槽（挖个坑，等着组件的使用者进行填充）</slot>
  </div>
</template>

<script>
    export default {
        name:'Category',
        props: ['title'],
        data() {
            return {
                camera:['佳能','尼康','索尼'],
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
            }
        },
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