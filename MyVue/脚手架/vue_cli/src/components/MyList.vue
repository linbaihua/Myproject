<template>
    <ul class="todo-main">
        <!-- v-for遍历对象， :todo声明一个属性绑定到v-for中的todo对象-->
        <MyItem v-for="todo in todoList" :key="todo.id" :todo='todo'/>
    </ul>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
    name:'MyList',
    data() {
        return {
            // 在数组里面存对象
            todoList:[
                // id使用string，不使用number类型，因为number有尽头，string没有
                // 真正开发中用的都是hash值
                {id:'001', title:'抽烟',done:true },
                {id:'002', title:'喝酒',done:false },
                {id:'003', title:'开车',done:true },
            ]
        }
    },
    components:{MyItem}
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