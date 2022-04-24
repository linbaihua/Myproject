<template>
    <div class="container">

        <Category title="相机">
            <template scope="atguigu">
                <ul>
                    <li v-for="c in atguigu.camera" :key="c.id">{{c}}</li>
                </ul>
            </template>
        </Category>

        <Category title="相机">
            <template scope="atguigu">
                <ol>
                    <li v-for="c in atguigu.camera" :key="c.id">{{c}}</li>
                </ol>
            </template>
        </Category>

        <Category title="相机">
            <template scope="atguigu">
                <!-- scope给拿到的作用域插槽起名字，从此 atguigu 就是一个数据对象，时 category
                中定义的 slot 传的数据 -->
                <p>{{atguigu}}</p>
            </template>
        </Category>

    </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name:'App',
        components:{Category},
    }
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: space-around;
    }
    img{
        width: 60%; 
        /* 设置图片以块级元素显示内容，下面才可以设置margin auto 对齐 */
        display: block;
        margin: auto;
    }
    .games{
        display: flex;
        justify-content: space-around;
    }
</style>