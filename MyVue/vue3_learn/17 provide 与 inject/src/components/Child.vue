<template>
    <div class="child">
        <h3>child子组件:{{car.name}}---{{car.price}}</h3>
        <Son/>
    </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
    import Son from './Son.vue'
    export default {
        name:'Child',
        components:{Son},
        setup() {
            // 接收父组件的car对象
            // 父子组件虽然也可以inject，但是父子组件之间一般用props接收数据
            let car = inject('car')
            console.log(car);

            return {car}
        }
    }
</script>

<style>
    .child{
        background-color: skyblue;
        padding: 10px;
    }
</style>