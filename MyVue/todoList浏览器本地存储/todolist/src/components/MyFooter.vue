<template>
    <div class="todo-footer" v-show="total">
        <label>
        <!-- <input type="checkbox" :checked='isAll' @change="checkAll"/> -->
        <!-- checkbox类型，v-model监听的就是checked属性值和change事件 -->
        <input type="checkbox" v-model='isAll' />
        </label>
        <span>
        <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todoList','selectAllTodo','clearAllTodo'],
    computed:{
        total(){
            return this.todoList.length
        },
        doneTotal(){
            // reduce方法，todo是todoList中的每一个子项
            return this.todoList.reduce((pre,todo) => pre + Number(todo.done), 0)
        },
        // 使用简写写法只能读不能set,全写可以使用set方法
        isAll:{
            get(){
                return this.total == this.doneTotal && this.total > 0
            },
            set(value){
                this.selectAllTodo(value)
            }
        }
    },
    methods: {
        // 不使用方法写，有更简单的，使用v-bind
        /* checkAll(e){
            this.selectAllTodo(e.target.checked)
        } */

        clearAll(){
            this.clearAllTodo()
        }
    },
}
</script>

<style scoped>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>