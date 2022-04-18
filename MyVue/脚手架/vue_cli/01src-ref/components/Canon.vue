<template>
  <div id="canon">
      <h2>{{name}}</h2>
      <h2>{{type}}</h2>
  </div>
</template>

<script>
export default {
    name:'Canon',
    data() {
        return {
            name:'canon',
            type:'5d4'
        }
    },
}
</script>

<style>
    #canon{
        color: yellowgreen;
        background-color: antiquewhite;
    }
</style>