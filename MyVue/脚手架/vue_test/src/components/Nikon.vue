
<template>
  <div id="nikon">
      <h2>品牌:{{brand}}</h2>
      <h2>型号:{{type}}</h2>
  </div>
</template>

<script>
export default {
    name:'Nikon',
    data() {
        return {
            brand:'nikon',
            type:'d850'
        }
    },
}
</script>

<style>
    #nikon{
        color: orangered;
    }
</style>