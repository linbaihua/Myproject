<template>
    <div class="son">
        <h3>我是son子组件：{{car.name}}--{{car.price}}</h3>
    </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
    export default {
        name:'Son',
        setup() {
            // 接收父组件的car对象
            // 祖孙组件之间数据传递一般就使用provide，inject传递数据
            let car = inject('car')
            return {car}
        }
    }
</script>

<style>
    .son{
        background-color: orange;
        padding: 10px;
    }
</style>