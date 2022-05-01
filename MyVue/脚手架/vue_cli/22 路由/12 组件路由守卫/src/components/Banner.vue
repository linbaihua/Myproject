<template>
    <div>
        <h2>vue demo</h2>
        <button @click="forward">前进</button>
        <button @click="back">后退</button>
        <button @click="goTest">测试一下go</button>
    </div>
</template>

<script>
    export default {
        name:'Banner',
        methods: {
            forward(){
                this.$router.forward()
            },
            back(){
                this.$router.back()
            },
            goTest(){
                // go函数需要传进一个参数，+2就是前进两部，-2就是后退两部
                this.$router.go(2)
            }
        },
    }
</script>
