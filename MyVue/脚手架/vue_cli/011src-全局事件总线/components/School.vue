<template>
    <div class="school">
        <h2>{{schoolName}}</h2>
        <h2>{{schoolAddress}}</h2>
    </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            schoolName:'厦门理工',
            schoolAddress:'福建厦门'
        }
    },
    mounted() {
        // 监视hello自定义事件，后面的是回调函数
        this.$bus.$on('hello', (data) => {
            console.log('我是school组件，收到了数据', data);
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
    },
}
</script>

<style>
    .school{
        background-color: rgb(89, 168, 168);
        padding: 5px;
        margin: 5px;
    }
</style>