<template>
  <div>
      <Canon/>
      <Nikon/>
  </div>
</template>

<script>
import Canon from './components/Canon.vue'
import Nikon from './components/Nikon.vue'
export default {
    name:'App',
    components:{
        Canon,
        Nikon
    }
}
</script>