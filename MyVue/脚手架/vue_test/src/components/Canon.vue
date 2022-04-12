
<template>
  <div id="canon">
      <h2>品牌:{{brand}}</h2>
      <h2>型号:{{type}}</h2>
  </div>
</template>

<script>
export default {
    name:'Canon',
    data() {
        return {
            brand:'canon',
            type:'5d'
        }
    },
}
</script>

<style>
    #canon{
        color: orangered;
    }
</style>