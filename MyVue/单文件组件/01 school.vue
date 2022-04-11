
// template里面写html结构
<template>
    <div id="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

// 定义组件
<script>
// export导出组件，可以省略vue.extend
export default {
    name:'School',
    data() {
        return {
            name:'厦门理工',
            address:'福建厦门'
        }
    },
    methods: {
        showName(){
            alert(this.name)
        }
    },
}
</script>

// css样式
<style lang="">
    #school{
        color: yellowgreen;
        background-color: orange;
    }
</style>