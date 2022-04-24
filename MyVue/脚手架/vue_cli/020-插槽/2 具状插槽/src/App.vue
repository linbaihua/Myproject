<template>
    <div class="container">
        <!-- 每个标签都有title属性，props可以获取到标签中的属性值 
        不是非要写成 :listDate props才可以获取到，v-bind 时可以
        获取本页面中的值-->
        <Category title="水果">
            <!-- 原先的指定插槽名，sltot='slotname' -->
            <img slot="center" src="https://pic3.zhimg.com/v2-78cb366bb73f62856150149fa4444733_1440w.jpg?source=172ae18b" alt="">
            <ul slot="footer">
                <li v-for="f in foods" :key="f.id">{{f}}</li>
            </ul>
        </Category>

        <Category title="相机">
            <img slot="center" src="https://www.wanwupai.com/upload/product/20190826-1/a157954286ff522299f10bfd0748105e.jpg" alt="">
            <ul slot="footer">
                <li v-for="c in camera" :key="c.id">{{c}}</li>
            </ul>
        </Category>

        <Category title="游戏">
            <ul slot="center">
                 <li v-for="items in games" :key="items.id">{{items}}</li>
            </ul>
            <!-- vue2.6 新增的template中可以使用 v-slot 属性来指定插槽名 -->
            <template v-slot:footer>
                <div class="games">
                    <a href=":javascript">经典</a>
                    <a href=":javascript">热门</a>
                    <a href=":javascript">推荐</a>
                </div>
            </template>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue'
    export default {
        name:'App',
        components:{Category},
        data() {
            return {
                foods:['苹果','香蕉','橘子'],
                camera:['佳能','尼康','索尼'],
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
            }
        },
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