<template>
    <div id="nikon">
        <h2>{{series}}</h2>
        <h2>{{brand}}</h2>
        <h2>{{type}}</h2>
        <button @click="sayHello">click me</button>
    </div>
</template>

<script>

import {mixin1, mixin2} from '../mixin'

export default {
    name:'Nikon',
    data() {
        return {
            brand:'nikon',
            type:'d850'
        }
    },
    /* methods: {
        sayHello(){
            alert(this.type)
        }
    }, */

    mixins:[mixin1, mixin2]
}
</script>

<style>
    #nikon{
        color: rgb(126, 97, 45);
        background-color: yellowgreen;
    }
</style>