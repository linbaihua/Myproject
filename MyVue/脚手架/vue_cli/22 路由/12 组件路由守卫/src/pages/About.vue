<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
    export default {
        name:'About',
/*         beforeDestroy() {
            console.log('about即将被销毁');
        },
        mounted() {
            console.log('about被使用');
            // 注意window是小写
            window.aboutRoute = this.$route
            window.aboutRouter = this.$router
            console.log(window);
        }, */
        beforeRouteEnter (to, from, next) {
            console.log('进入组件路由');
             if (to.meta.isAuth) { //判断是否鉴权,如果没有配置isAuth也可以进去
                if (localStorage.getItem('school') === 'atguigu') {
                    next()
                } else {
                    alert('无权限查看')
                }
            } else {
                next()
            }
        },
        beforeRouteLeave (to, from, next) {
            console.log('组件路由离开');
            next()
        }
    }
</script>

<style>

</style>