<template>
    <div class="school">
        <h2>{{schoolName}}</h2>
        <h2>{{schoolAddress}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data() {
        return {
            schoolName:'厦门理工',
            schoolAddress:'福建厦门'
        }
    },
    methods: {
        callback(msgName,data){
            console.log('收到消息',data);
        }
    },
    mounted() {
        // 监听订阅
        this.pubId = pubsub.subscribe('hello', this.callback)
    },
    beforeDestroy() {
        // 取消订阅
        pubsub.unsubscribe(this.pubId)
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