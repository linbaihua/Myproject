<template>
  <div id="nikon">
      <h2>{{name}}</h2>
      <h2>{{type}}</h2>
  </div>
</template>

<script>
export default {
    name:'Nikon',
    data() {
        return {
            name:'nikon',
            type:'d850'
        }
    },
}
</script>

<style>
    #nikon{
        color: aquamarine;
        background-color: antiquewhite;
    }
</style>