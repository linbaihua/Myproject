<template>
    <ul class="todo-main">
        <!-- transition-group给每个todo添加过渡效果 -->
        <transition-group 
            name="animate__animated animate__bounce"
            enter-active-class="animate__fadeInLeft"
            leave-active-class="animate__fadeOutRight"
        >
        <!-- v-for遍历对象， :todo声明一个属性绑定到v-for中的todo对象-->
            <MyItem 
                v-for="todo in todoList" 
                :key="todo.id" 
                :todo='todo'
            />
        </transition-group>
    </ul>
</template>

<script>
import 'animate.css'
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    // props用来接收父组件的数据
    components:{MyItem},
    props:['todoList'],
}
</script>

<style scoped>
    /*main*/
    .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
    /* 去掉ul的列表项符号 */
    list-style-type: none;
    }

    .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
    }
</style>