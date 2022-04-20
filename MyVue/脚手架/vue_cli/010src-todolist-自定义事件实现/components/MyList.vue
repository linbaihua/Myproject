<template>
    <ul class="todo-main">
        <!-- v-for遍历对象， :todo声明一个属性绑定到v-for中的todo对象-->
        <MyItem 
            v-for="todo in todoList" 
            :key="todo.id" 
            :todo='todo'
            :checkTodo='checkTodo'
            :deleteTodo='deleteTodo'
        />
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    // props用来接收父组件的数据
    components:{MyItem},
    props:['todoList','checkTodo','deleteTodo'],
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