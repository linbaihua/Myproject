<template>
    <div id="canon">
        <h2>{{series}}</h2>
        <h2>{{brand}}</h2>
        <h2>{{type}}</h2>
        <button @click="sayHello">click me</button>
    </div>
</template>

<script>

export default {
    name:'Canon',
    data() {
        return {
            brand:'canon',
            type:'5d4'
        }
    },
    /* methods: {
        sayHello(){
            alert(this.type)
        }
    }, */

}
</script>

<style>
    #canon{
        color: rgb(49, 121, 64);
        background-color: yellowgreen;
    }
</style>