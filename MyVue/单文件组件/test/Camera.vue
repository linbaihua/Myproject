<template>
  <div id="camera">
      <Canon></Canon>
      <Nikon></Nikon>
  </div>
</template>

<script>
import Canon from './Canon.vue'
import Nikon from './Nikon.vue'
export default {
    name:'Camera',
    components:{
        Canon,
        Nikon
    }
}
</script>

<style>
    #camera{
        background-color: orange;
    }
</style>