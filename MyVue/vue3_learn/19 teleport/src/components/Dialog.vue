<template>
    <div>
        <button @click="isShow = true">点我弹个窗</button>
        <teleport to="body">
            <!-- 遮罩层 -->
            <div v-if="isShow" class="mask">
                <!-- 弹窗层 -->
                <div class="dialog">
                    <h3>我是一个弹窗</h3>
                    <h4>一些内容</h4>
                    <h4>一些内容</h4>
                    <button @click="isShow = false">关闭弹窗</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
    export default {
        name:'Dialog',
        setup() {
            let isShow = ref(false)
            return {isShow}
        }
    }
</script>

<style>
    .mask{
        position: absolute;
        /* 遮罩层这里设置将遮住全部的组件，半透明使得能看见却不能点 */
        top: 0;bottom: 0;left: 0;right: 0;
        background-color: rgba(143, 143, 143, 0.582);
    }
    .dialog{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%); 
        text-align: center;
        width: 300px;
        height: 300px;
        background-color: rgb(231, 231, 231) ;
    }
</style>