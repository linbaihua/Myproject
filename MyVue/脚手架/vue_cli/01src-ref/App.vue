<template>
<!-- template里面要有一个根元素 -->
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDom">click me</button>
        <Canon/>
        <Nikon/>
    </div>
</template>

<script>
// import 别的组件
import Canon from './components/Canon.vue'
import Nikon from './components/Nikon.vue'

export default {
    name:'App',
    data() {
        return {
            msg:'hello camera'
        }
    },
    // 注册组件
    components:{
        Canon,
        Nikon
    },
    methods: {
        showDom(){
            console.log(this.$refs.title); //真实dom元素
            console.log(this.$refs.btn) //真是dom元素
        }
    },
}
/* 
    -ref代替原生js中的id,refs代替document.getelementid()
*/
</script>