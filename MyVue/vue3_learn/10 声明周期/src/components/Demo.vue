<template>
  <h2 v-if="isShow">{{sum}}</h2>
  <button @click="sum++">点我sum+1</button>
  <button @click="isShow =!isShow">切换隐藏</button>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated,ref } from '@vue/runtime-core';
    export default {
        name:'Demo',
        
        setup() {
            console.log('----setup--------');
            
            let isShow = ref(true)
            let sum = ref(0)

            // setup包含了初始化,直接来到虚拟dom
            onBeforeMount(() => {
                console.log('-----onbeforemount');
            })
            // 真实dom
            onMounted(() => {
                console.log('-----onmouted-----');
            })
            // 数据更新前
            onBeforeUpdate(() => {
                console.log('-----onbeforeupdate------');
            })
            // 数据更新
            onUpdated(() => {
                console.log('---onupdated-----');
            })
            // 销毁前
            onBeforeUnmount(() => {
                console.log('---onbeforeunmount------');
            })
            // 销毁
            onUnmounted(() => {
                console.log('---onunmouted------');
            })

            return{
                sum,
                isShow
            }
        },
        // 通过配置项的形式使用声明周期钩子

        //#region 
        // 1 初始化前
 /*        beforeCreate() {
            console.log('---beforecreate----');
        },
        // 2 初始化后
        created() {
            console.log('----created----')
        },
        // 3 产生真实dom之前
        beforeMount() {
            console.log('---beforemount----')
        },
        // 4 产生真实dom
        mounted() {
            console.log('---mounted-------');
        },
        // 5 更新数据前
        beforeUpdate() {
            console.log('----beforeupdate----');
        },
        // 6 更新数据
        updated() {
            console.log('----updated------');
        },
        // 7 原来的beforedestroy,销毁前
        beforeUnmount() {
            console.log('---beforeunmount-----');
        },
        // 8 原来的destroy,销毁vm
        unmounted() {
            console.log('----unmounted-----');
        }, */
        //#endregion 
    }
</script>

<style>

</style>